/**
 * ESLint: snakecasejs
 * =====================
 * This is to enforce a style of snake_case in your project, rather than just disabling camelCase.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *                David Buchan-Swanson <david.buchanswanson@gmail.com>
 *                Tomasz Domański [@rozpuszczalny] <github@tomaszdomanski.com> (https://tomaszdomanski.com)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */

// ignore javascript language default function
const array_system_var = require('./array_system_var');
// General Camel case pattern
const general_camelcase_pattern = /^[A-Za-z][a-z0-9]+((\d)|([A-Z0-9][a-z0-9]+))+$/;
// UpperCamel pattern
const uppercamelcase_pattern = /^([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))+$/;

// Default list of names allowed to be camel cased
const default_whitelist = [];
// Default list of parent node types, that allows node to be camel cased
const default_filter = ["ClassDeclaration", "NewExpression"];
// Default list of allowed patterns to be camel cased
const default_allowed_patterns = [];
// Default list of allowed patterns to be upper cased
const default_allowed_uppercases = [];

const whitelist_uppercase = (allowed_uppercases, str) => (
  str.replace(new RegExp(allowed_uppercases.join('|'), 'i'), (match) => match.toUpperCase())
);
const to_snakecase = (str) => (
  str.replace(/(?<=[a-zA-Z])[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
);

/**
 * Detect function and variables name
 * =====================
 * Filter code, find functions name and variables
 *
 */
module.exports = {
	rules: {
		snakecasejs: {
			meta: {
				fixable: true,
			},
			create (context) {
				const get_array_field = (key, default_value) => (
					Array.isArray(context.settings[key])
						? context.settings[key]
						: default_value
				);
				const whitelist = get_array_field("snakecasejs/whitelist", default_whitelist);
				const settings = get_array_field("snakecasejs/filter", default_filter);
				const allow_uppercamel = Boolean(context.settings["snakecasejs/allow_uppercamel"]);

				const allowed_patterns = get_array_field("snakecasejs/allowed_patterns", default_allowed_patterns);
				const allowed_pattern = new RegExp(allowed_patterns.join('|'));
				const allowed_uppercases = get_array_field("snakecasejs/allowed_uppercases", default_allowed_uppercases);

				/**
				 * Indicates if current node should be ignored for error report
				 *
				 * @param {Object} node - eslint node object
				 *
				 * @return {Boolean} true/false - exist type in filter array?
				 *
				 */
				const filter = (node) => settings.includes(node.parent.type);

				return {
					Identifier (node) {
						const name = node.name.replace(new RegExp(allowed_uppercases.join('|'), 'i'), (match) => match.toLowerCase());

						// detect camelCase
						if (name.match(general_camelcase_pattern)) {
							// ignoring system builtins and whitelisted identifiers
							if (array_system_var.includes(name) || whitelist.includes(name)) {
								return true;
							}

							if (allow_uppercamel && name.match(uppercamelcase_pattern)) {
								return true;
							}

							if (allowed_patterns.length > 0 && name.match(allowed_pattern)) {
								return true;
							}

							if (filter(node)) {
								return true;
							}

							const variables = context.getDeclaredVariables(node.parent);
							const variable = variables.length > 0 ? variables[0]: {};
							const references = variable.references || [];
							const reference_nodes = references.map((reference) => reference.identifier);

							// error message on ide
							context.report({
								message: `Identifiers must be snake_case: {{ identifier }} (${node.parent.type}) (refs: ${references.length})`,
								node: node,
								data: {
                  // Returning back the original name
									identifier: node.name,
								},

								// --fix eslint parameter: detect camelCase and convert in snake_case
								fix (fixer) {
									const nodes = new Set([].concat([node], reference_nodes));
									return [...nodes].map((node) => (
										fixer.replaceText(node, whitelist_uppercase(allowed_uppercases, to_snakecase(node.name)))
									));
								}
							});
						}
					}
				};
			}
		}
	}
};

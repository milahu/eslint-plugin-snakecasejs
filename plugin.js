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

// Default list of names allowed to be camel cased
const default_whitelist = [];
// Default list of parent node types, that allows node to be camel cased
const default_filter = ["ClassDeclaration", "NewExpression"];

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
				const raw_whitelist = context.settings["snakecasejs/whitelist"];
				const whitelist = Array.isArray(context.settings["snakecasejs/whitelist"]) ? raw_whitelist : default_whitelist;
				const raw_settings = context.settings["snakecasejs/filter"];
				const settings = Array.isArray(context.settings["snakecasejs/filter"]) ? raw_settings : default_filter;

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
						var name = node.name;

						// ignore javascript language default function
						var array_system_var = ["parseInt", "parseFloat", "isNaN", "isFinite", "decodeURI", "decodeURIComponent", "encodeURI", "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "indexOf", "forEach", "charAt", "charCodeAt", "endsWith", "lastIndexOf", "startsWith", "toLowerCase", "toLocaleLowerCase", "toUpperCase", "toLocaleUpperCase", "toFixed", "toPrecision", "setInterval", "clearInterval", "setTimeout", "toDateString", "toTimeString", "getTime", "getFullYear", "getUTCFullYear", "getMonth", "getUTCMonth", "getDate", "getUTCDate", "getDay", "getUTCDay", "getHours", "getUTCHours", "getMinutes", "getUTCMinutes", "getSeconds", "getUTCSeconds", "getMilliseconds", "getUTCMilliseconds", "getTimeZoneOffset", "setTime", "setMilliseconds", "setUTCMilliseconds", "setSeconds", "setUTCSeconds", "setMinutes", "setUTCMinutes", "setHours", "setUTCHours", "setDate", "setUTCDate", "setMonth", "setUTCMonth", "setFullYear", "setUTCFullYear", "toUTCString", "toISOString", "toJSON", "encodeURIComponent", "EventEmitter", "innerHTML", "waitForSelector", "readFileSync", "readFileAsync", "querySelector", "querySelectorAll", "appendFile", "getTimezoneOffset"];

						var split = name.split(/(?=[A-Z])/);
						var split_az = name.split(/(?=[a-z])/);

						// detect camelCase
						if ((split.length > 1 && split_az.length > 1) && !array_system_var.includes(name) && !whitelist.includes(name)) {
							if (filter(node)) {
								return true;
							}

							// error message on ide
							context.report({
								message: `Identifiers must be snake_case: {{ identifier }} (${node.parent.type})`,
								node: node,
								data: {
									identifier: node.name,
								},

								// --fix eslint parameter: detect camelCase and convert in snake_case
								fix (fixer) {
									return fixer.replaceText(node, node.name.split(/(?=[A-Z])/).join("_").toLowerCase());
								}
							});
						}
					}
				};
			}
		}
	}
};
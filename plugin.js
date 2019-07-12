/**
 * ESLint: snakecasejs
 * =====================
 * This is to enforce a style of snake_case in your project, rather than just disabling camelCase.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *                David Buchan-Swanson <david.buchanswanson@gmail.com>
 *
 * @license: This code and contributions have 'MIT License'
 *
 */
let eslintrc = null;
try {
	eslintrc = require("./../../.eslintrc");
} catch (err) {
	eslintrc = [];
}

/**
 * Whitelist exist?
 * =====================
 * Set empty array if whitelist is undefined in eslintrc
 *
 */
if (typeof eslintrc.settings["snakecasejs/whitelist"] === "undefined") {
	eslintrc.settings["snakecasejs/whitelist"] = [];
}

/**
 * Filter exist?
 * =====================
 * Set array with what you want to lint: function, class, etc...
 *
 * @link: https://eslint.org/docs/rules/indent
 *
 */
if (typeof eslintrc.settings["snakecasejs/filter"] === "undefined" || eslintrc.settings["snakecasejs/filter"] === []) {
	eslintrc.settings["snakecasejs/filter"] = ["ClassDeclaration", "NewExpression"];
}

/**
 * Detect var and function
 * =====================
 * Filter code, find functions name and variables
 *
 * @param {Object} node - eslint node object
 *
 * @return {Boolean} true/false - exist type in filter array?
 *
 */
function filter (node) {
	return eslintrc.settings["snakecasejs/filter"].indexOf(node.parent.type) > -1;
}

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
				return {
					Identifier (node) {
						var name = node.name;

						// ignore javascript language default function
						var array_system_var = ["parseInt", "parseFloat", "isNaN", "isFinite", "decodeURI", "decodeURIComponent", "encodeURI", "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "indexOf", "forEach", "charAt", "charCodeAt", "endsWith", "lastIndexOf", "startsWith", "toLowerCase", "toLocaleLowerCase", "toUpperCase", "toLocaleUpperCase", "toFixed", "toPrecision", "setInterval", "clearInterval", "setTimeout", "toDateString", "toTimeString", "getTime", "getFullYear", "getUTCFullYear", "getMonth", "getUTCMonth", "getDate", "getUTCDate", "getDay", "getUTCDay", "getHours", "getUTCHours", "getMinutes", "getUTCMinutes", "getSeconds", "getUTCSeconds", "getMilliseconds", "getUTCMilliseconds", "getTimeZoneOffset", "setTime", "setMilliseconds", "setUTCMilliseconds", "setSeconds", "setUTCSeconds", "setMinutes", "setUTCMinutes", "setHours", "setUTCHours", "setDate", "setUTCDate", "setMonth", "setUTCMonth", "setFullYear", "setUTCFullYear", "toUTCString", "toISOString", "toJSON", "encodeURIComponent", "EventEmitter", "innerHTML", "waitForSelector", "readFileSync", "readFileAsync", "querySelector", "querySelectorAll", "appendFile", "getTimezoneOffset"];

						var split = name.split(/(?=[A-Z])/);
						var split_az = name.split(/(?=[a-z])/);

						// detect camelCase
						if ((split.length > 1 && split_az.length > 1) && !array_system_var.includes(name) && !eslintrc.settings["snakecasejs/whitelist"].includes(name)) {
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
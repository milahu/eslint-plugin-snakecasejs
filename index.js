/**
 * snakecasejs
 * =====================
 * This is to enforce a style of snake_case in your project, rather than just disabling camelcase.
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 * @original:   David Buchan-Swanson <david.buchanswanson@gmail.com>
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function is_class_usage(node) {
    return ["FunctionDeclaration", "NewExpression", "MemberExpression"].indexOf(node.parent.type) > -1;
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

module.exports = {
    rules: {
        snakecasejs: {
            meta: {
                fixable: true,
            },
            create(context) {
                return {
                    Identifier(node) {
                        var name = node.name;
                        var array_system_var = ["parseInt", "parseFloat", "isNaN", "isFinite", "decodeURI", "decodeURIComponent", "encodeURI", "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "indexOf", "forEach", "charAt", "charCodeAt", "endsWith", "lastIndexOf", "startsWith", "toLowerCase", "toLocaleLowerCase", "toUpperCase", "toLocaleUpperCase", "toFixed", "toPrecision", "setInterval", "clearInterval", "setTimeout", "toDateString", "toTimeString", "getTime", "getFullYear", "getUTCFullYear", "getMonth", "getUTCMonth", "getDate", "getUTCDate", "getDay", "getUTCDay", "getHours", "getUTCHours", "getMinutes", "getUTCMinutes", "getSeconds", "getUTCSeconds", "getMilliseconds", "getUTCMilliseconds", "getTimeZoneOffset", "setTime", "setMilliseconds", "setUTCMilliseconds", "setSeconds", "setUTCSeconds", "setMinutes", "setUTCMinutes", "setHours", "setUTCHours", "setDate", "setUTCDate", "setMonth", "setUTCMonth", "setFullYear", "setUTCFullYear", "toUTCString", "toISOString", "toJSON", "executablePath"];
                        var split = name.split(/(?=[A-Z])/);
                        var split_az = name.split(/(?=[a-z])/);
                        if ((split.length > 1 && split_az.length > 1) && !contains(array_system_var, name)) {
                            if (is_class_usage(node)) {
                                return true;
                            }
                            context.report({
                                message: "Identifiers must be snake_case: {{ identifier }}",
                                node: node,
                                data: {
                                    identifier: node.name,
                                },
                                // fix(fixer) {
                                //   return fixer.replaceText(node, split.map(function(piece){ return piece.replace('_', '').toLowerCase(); }).join('_'));
                                // }
                            });
                        }
                    }
                };
            }
        }
    }
};
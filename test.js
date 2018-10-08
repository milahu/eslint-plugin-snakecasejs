/**
 * snakecasejs
 * =====================
 * This is to enforce a style of snake_case in your project, rather than just disabling camelcase.
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 * @original:   David Buchan-Swanson <david.buchanswanson@gmail.com>
 * @license:    This code and contributions have 'MIT License'
 *
 */
var rule_tester = require("eslint").RuleTester;
var rule = require("./index");

var rule_tester_run = new rule_tester();
rule_tester_run.run("snakecasejs", rule, {
    valid: [
        "var snake_case = true;",
        "function another_snake_case(){}",
        "function SomeClass() {}",
        "new SomeClass()",
        "SomeClass.method()",
    ],
    invalid: [{
        code: "var notSnakeCase",
        errors: [{ message: "Identifiers must be snake_case: notSnakeCase", fix: { text: "not_snake_case" } }],

    }]
});
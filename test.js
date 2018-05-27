var rule_tester = require("eslint").RuleTester;
var rule = require("./").rules.snakecase;

var rule_tester_run = new rule_tester();
rule_tester_run.run("snake_case", rule, {
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
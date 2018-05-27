<p align="center"><h1 align="center">ESLint Plugin snake_case.js</h1></p>

<p align="center"><a href="#" alt="License"><img src="https://img.shields.io/badge/license-GLPv3-brightgreen.svg"></a>
<a href="https://www.npmjs.com/package/eslint" alt="powered by eslint"><img src="https://img.shields.io/badge/powered%20by-eslint-46aef7.svg"></a>
<a href="https://github.com/ptkdev/eslint-plugin-snakecasejs/releases" alt="Version"><img src="https://img.shields.io/badge/version-v1.0.0-lightgrey.svg"></a>
<a href="https://slack.ptkdev.io" alt="Slack Chat"><img src="https://img.shields.io/badge/chat%20on-slack-orange.svg"></a>
<a href="http://blog.ptkdev.io" alt="Blog"><img src="https://img.shields.io/badge/blog-medium-2AE176.svg"></a>
<a href="https://twitter.com/ptkdevio" alt="Twitter"><img src="https://img.shields.io/badge/twitter-ptkdevio-2AA3EF.svg"></a>   
<a href="mailto:support@ptkdev.io" alt="Support: support@ptkdev.io"><img src="https://img.shields.io/badge/help-support@ptkdev.io-fbbc05.svg"></a></p>
<p align="center"><a href="http://patreon.ptkdev.io" alt="Patreon Backer"><img src="https://img.shields.io/badge/donate-patreon-F87668.svg"></a> <a href="http://paypal.ptkdev.io" alt="Paypale Donate"><img src="https://img.shields.io/badge/donate-paypal-46AFE0.svg"></a></p>

## What does it do
This is to enforce a style of snake_case in your project, rather than just disabling camelcase.

## Features
* [✓] Easy to use
* [✓] Compatible with last version of ESLint
* [✓] Compatible with CamelCase (Class name or similar)

## Fast setup
1. Add dependencies on `package.json`
```
"dependencies": {
	"eslint": "^4.19.1",
},
"devDependencies": {
	"eslint-plugin-snakecasejs": "^1.0.0",
}
```
2. Create `.eslintrc.json` file with:
```
{
    "plugins": [
        "snakecasejs"
    ],
    "rules":
    {
        "snakecasejs/snakecasejs": "error"
    }
}
```
NOTE: switch `error` to `warn` if you don't need snake_case as mandatory rules.

For advanced configuration see [INSTALL.md](https://github.com/ptkdev/eslint-plugin-snakecasejs/blob/master/INSTALL.md).

<h1>License</h1>

GNU GENERAL PUBLIC LICENSE

Copyright (c) 2018 Patryk Rzucidło (PTKDev)

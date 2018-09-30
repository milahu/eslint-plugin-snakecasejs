[![](https://ptkdev.it/img/github/eslintplugin_snakecasejs.png)](https://www.npmjs.com/package/eslint-plugin-snakecasejs)

# ESLint Plugin snakecasejs

[![](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![](https://img.shields.io/badge/powered%20by-eslint-46aef7.svg)](https://www.npmjs.com/package/eslint) [![](https://img.shields.io/badge/version-v1.1.0-lightgrey.svg)](https://github.com/social-manager-tools/instagram-bot.js/archive/master.zip) [![](https://img.shields.io/badge/chat%20on-slack-orange.svg)](http://slack.ptkdev.io) [![](https://img.shields.io/badge/chat%20on-discord-7289da.svg)](http://discord.ptkdev.io) [![](https://img.shields.io/badge/blog-medium-2AE176.svg)](http://blog.ptkdev.io) [![](https://img.shields.io/badge/twitter-ptkdevio-2AA3EF.svg)](https://twitter.com/ptkdevio)

[![](https://img.shields.io/badge/donate-patreon-F87668.svg)](http://patreon.ptkdev.io) [![](https://img.shields.io/badge/donate-paypal-46AFE0.svg)](http://paypal.ptkdev.io) [![](https://img.shields.io/badge/buy%20me-coffee-4B788C.svg)](http://coffee.ptkdev.io) [![](https://img.shields.io/badge/help-support@ptkdev.io-fbbc05.svg)](mailto:support@ptkdev.io)

## What does it do
This is to enforce a style of snake_case in your project, rather than just disabling camelcase.

## Features
* [✓] Easy to use
* [✓] MIT License
* [✓] Compatible with last version of ESLint
* [✓] Compatible with CamelCase (Class name or similar)
* [✓] Whitelist array for methods or variables with camelCase syntax from other libraries/npm package.

## Fast setup
1. Add dependencies on `package.json`
```
"dependencies": {
	"eslint": "^4.19.1",
},
"devDependencies": {
	"eslint-plugin-snakecasejs": "^1.1.0",
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
        "snakecasejs/snakecasejs": "error",
        "snakecasejs/whitelist": []
    }
}
```
3. If it works add a star :star: at this project :heart:
4. If you want to help me: **[donate on paypal](http://paypal.ptkdev.io)** or become a **[backer on patreon](http://patreon.ptkdev.io)**.

NOTE: switch `error` to `warn` if you don't need snake_case as mandatory rules.

For advanced configuration see [INSTALL.md](https://github.com/ptkdev/eslint-plugin-snakecasejs/blob/master/INSTALL.md).

## Ignore words, variables, methods, class name (whitelist)
Add rules: `"snakecasejs/whitelist": []` with array of variables or method with camelCase syntax. 

Plugin ignore check on this words. Example: `"snakecasejs/whitelist": ["externalPath","setNumber"]`

# License

MIT LICENSE

Copyright (c) 2018 Patryk Rzucidło (PTKDev)

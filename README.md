[![ESLint Plugin: snakecasejs](https://raw.githubusercontent.com/ptkdev/eslint-plugin-snakecasejs/master/.github/assets/eslint_plugin_snakecasejs_logo.png)](https://www.npmjs.com/package/eslint-plugin-snakecasejs)

# 🐍 ESLint Plugin: snakecasejs

[![](https://img.shields.io/badge/version-v2.0.1-lightgrey.svg)](https://github.com/ptkdev/eslint-plugin-snakecasejs/releases) [![](https://img.shields.io/npm/v/eslint-plugin-snakecasejs.svg)](https://www.npmjs.com/package/eslint-plugin-snakecasejs) [![](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![](https://img.shields.io/badge/ES-9-F7DF1E.svg)](https://wikipedia.org/wiki/ECMAScript) [![](https://img.shields.io/badge/powered%20by-eslint-46aef7.svg)](https://www.npmjs.com/package/eslint) [![](https://snyk.io/test/npm/eslint-plugin-snakecasejs/badge.svg)](https://snyk.io/test/github/eslint-plugin-snakecasejs)

> ESLint Plugin to enforce a style of snake_case in your project, rather than just disabling camelCase.

## 🎁 Support: Donate
> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

[![](https://img.shields.io/badge/donate-paypal-005EA6.svg)](http://paypal.ptkdev.io) [![](https://img.shields.io/badge/donate-patreon-F87668.svg)](http://patreon.ptkdev.io) [![](https://img.shields.io/badge/buy%20me-coffee-4B788C.svg)](http://coffee.ptkdev.io)

## 📎 Menu
- 💡 [Features](#-features)
- 🐛 [Known Bugs](https://github.com/ptkdev/eslint-plugin-snakecasejs/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
- 🍻 Community:
  - 🐔 [Discord](http://discord.ptkdev.io)
  - 🐓 [Slack](http://slack.ptkdev.io)
  - 🐤 [Twitter](http://twitter.ptkdev.io)

## 💡 Features
* [✔️] Easy to use
* [✔️] MIT License
* [✔️] Compatible with latest version of ESLint
* [✔️] Compatible with CamelCase (Class name or similar)
* [✔️] Compatible with --fix (convert automatically camelCase to snake_case)
* [✔️] White list array for methods or variables with camelCase syntax from other libraries/npm package.

## 🔨 Fast setup
1. Install eslint: `npm install eslint --save-dev`
2. Install snakecasejs plugin: `npm install eslint-plugin-snakecasejs --save-dev`
3. Create `.eslintrc.json` file with:
```json
{
    "plugins": [
        "snakecasejs"
    ],
    "settings":
    {
        "snakecasejs/filter": ["FunctionDeclaration", "NewExpression", "MemberExpression"],
        "snakecasejs/whitelist": ["NewPage", "AssocArrayClass"]
    },
    "rules":
    {
        "snakecasejs/snakecasejs": "error"
    }
}
```
4. If it works add a star 🌟 at this project ❤️
5. If you want to help me: **donate on [paypal](http://paypal.ptkdev.io)/[ko-fi](http://coffee.ptkdev.io)** or become a **[backer on patreon](http://patreon.ptkdev.io)**.

NOTE: switch `error` to `warn` if you don't need snake_case as mandatory rule.

## 🔧 --fix
This eslint parameter fix simple rules of linter and with this plugin convert all camelCase variables or function name to snake_case.
Fix command support whitelist. Run this command in your project directory:

`eslint ./ --cache --ignore-pattern .gitignore --fix`

**WARNING:** You need install eslint globally for this feature: `npm install eslint -g`

## 📋 White list
Ignore variables without snake_case syntax. Add to settings: `"snakecasejs/whitelist": ["NewPageClass"]` with array of variables with camelCase that you can not convert to snake_case (example: for external library naming convention).

Plugin ignore check on this words. Example: `"snakecasejs/whitelist": ["externalPath","setNumber"]`

## 🚬 Filter
Ignore checks for class declarations, methods, etc... Add to settings: `"snakecasejs/filter": []` with array of eslint expression or declaration, default value: `["ClassDeclaration", "NewExpression"]` for better compatibility with camel case class.

## 📚 Documentation
Run `npm run docs`

## 👑 Sponsors (max 10 available)
Support this project by becoming a sponsor. 🙏 Become a sponsor on [patreon](http://patreon.ptkdev.io). Your logo will show up here with a link to your website.

[![](https://sponsors.ptkdev.io/1/avatar.png)](https://sponsors.ptkdev.io/1/website) [![](https://sponsors.ptkdev.io/2/avatar.png)](https://sponsors.ptkdev.io/2/website) [![](https://sponsors.ptkdev.io/3/avatar.png)](https://sponsors.ptkdev.io/3/website) [![](https://sponsors.ptkdev.io/4/avatar.png)](https://sponsors.ptkdev.io/4/website) [![](https://sponsors.ptkdev.io/5/avatar.png)](https://sponsors.ptkdev.io/5/website) [![](https://sponsors.ptkdev.io/6/avatar.png)](https://sponsors.ptkdev.io/6/website) [![](https://sponsors.ptkdev.io/7/avatar.png)](https://sponsors.ptkdev.io/7/website) [![](https://sponsors.ptkdev.io/8/avatar.png)](https://sponsors.ptkdev.io/8/website) [![](https://sponsors.ptkdev.io/9/avatar.png)](https://sponsors.ptkdev.io/9/website) [![](https://sponsors.ptkdev.io/10/avatar.png)](https://sponsors.ptkdev.io/10/website) [![](https://sponsors.ptkdev.io/11/avatar.png)](https://sponsors.ptkdev.io/11/website) [![](https://sponsors.ptkdev.io/12/avatar.png)](https://sponsors.ptkdev.io/12/website) [![](https://sponsors.ptkdev.io/13/avatar.png)](https://sponsors.ptkdev.io/13/website) [![](https://sponsors.ptkdev.io/14/avatar.png)](https://sponsors.ptkdev.io/14/website) [![](https://sponsors.ptkdev.io/15/avatar.png)](https://sponsors.ptkdev.io/15/website)

## 🦄 Backers
Thank you to all our backers! 🙏 Become a backer on [patreon](http://patreon.ptkdev.io).

[![](https://backers.ptkdev.io/1/avatar.png)](https://backers.ptkdev.io/1/website) [![](https://backers.ptkdev.io/2/avatar.png)](https://backers.ptkdev.io/2/website) [![](https://backers.ptkdev.io/3/avatar.png)](https://backers.ptkdev.io/3/website) [![](https://backers.ptkdev.io/4/avatar.png)](https://backers.ptkdev.io/4/website) [![](https://backers.ptkdev.io/5/avatar.png)](https://backers.ptkdev.io/5/website) [![](https://backers.ptkdev.io/6/avatar.png)](https://backers.ptkdev.io/6/website) [![](https://backers.ptkdev.io/7/avatar.png)](https://backers.ptkdev.io/7/website) [![](https://backers.ptkdev.io/8/avatar.png)](https://backers.ptkdev.io/8/website) [![](https://backers.ptkdev.io/9/avatar.png)](https://backers.ptkdev.io/9/website) [![](https://backers.ptkdev.io/10/avatar.png)](https://backers.ptkdev.io/10/website) [![](https://backers.ptkdev.io/11/avatar.png)](https://backers.ptkdev.io/11/website) [![](https://backers.ptkdev.io/12/avatar.png)](https://backers.ptkdev.io/12/website) [![](https://backers.ptkdev.io/13/avatar.png)](https://backers.ptkdev.io/13/website) [![](https://backers.ptkdev.io/14/avatar.png)](https://backers.ptkdev.io/14/website) [![](https://backers.ptkdev.io/15/avatar.png)](https://backers.ptkdev.io/15/website)

## ❤️ Contributing
I 💟 contributions! I will happily accept your pull request! Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is bad, sorry), etc... Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4" width="100px;" alt="Patryk Rzucidło"/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/eslint-plugin-snakecasejs/commits?author=ptkdev" title="Code">💻</a></td>
    <td align="center"><a href="https://deecewan.github.io"><img src="https://avatars1.githubusercontent.com/u/4755785?v=4" width="100px;" alt="David Buchan-Swanson"/><br /><sub><b>David Buchan-Swanson</b></sub></a><br /><a href="https://github.com/ptkdev/eslint-plugin-snakecasejs/commits?author=deecewan" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if the donations allow it, I would like to share some of the success with those who helped me the most. For me open source is share of code, share development knowledges and share donations!

## 📲 Tools
[![](https://img.shields.io/badge/app-social%20manager%20tools-ff7f19.svg)](http://socialmanager.tools/)
[![](https://img.shields.io/badge/api-instagram%20bot-895a4d.svg)](https://github.com/ptkdev/eslint-plugin-snakecasejs)
[![](https://img.shields.io/badge/api-twitter%20bot-21B7F4.svg)](https://github.com/ptkdev/socialmanagertools-twbot)
[![](https://img.shields.io/badge/api-facebook%20bot-3b5998.svg)](https://github.com/ptkdev/socialmanagertools-fbbot)
[![](https://img.shields.io/badge/telegram%20bot-feed%20rss%20for%20wordpress%20&amp;%20medium-00AB6C.svg)](https://github.com/ptkdev/ptkdev-tgbot)

[![](https://img.shields.io/badge/app-meingifs-E1215B.svg)](https://meingifs.pics/)
[![](https://img.shields.io/badge/stickers-ptkdev-128C7E.svg)](https://stickers.ptkdev.io/)

## 💫 License
* Code and Contributions have **MIT License**
* Images and logos have **CC BY-NC 4.0 License**
* Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2018-2019 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>
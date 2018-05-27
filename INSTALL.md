#### Setup
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
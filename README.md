# REGEXP-JS-MINIFICATOR
Simple, fast & minimal java-script minificator. 

File size: 1.5 kb without any dependies.

Version: 0.0.2.

Installation: 
```
npm install regexp-js-minificator
```

Using:
```
const minificator = require("regexp-js-minificator");
const fs = require('fs');

var input = fs.readFileSync("your_javascript_normal_file.js");
fs.readFileSync("your_javascript_minified_file.js", minificator (input));

```

For correct work put ";" after any "}". Example:
Using:
```
Function test ()
{
	some code;
	some code;
};

```

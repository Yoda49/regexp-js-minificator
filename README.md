# REGEXP-JS-MINIFICATOR
Simple, fast & minimal java-script minificator. 

File size: 1.5 kb without any dependies.

Version: 0.0.1.

installation: 
```
npm install regexp-js-minificator
```

```
const minificator = require("regexp-js-minificator");
const fs = require('fs');

var input = fs.readFileSync("your_javascript_normal_file.js");
fs.readFileSync("your_javascript_minified_file.js", minificator (input));

```

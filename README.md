# fileCacheBust
## Description
I need a way to bust cache on a file name and I want to write an npm package I think? :smiley_cat:

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Arguments](#arguments)

## Installation
**As an npm package:**
`npm install --save-dev filecachebust`

**As cloned from github:**
Move or clone the folder into your project. See useage...

## Usage
*Please Note: I made this with the intent of using it from npm's scripts in package.json.*

If you installed via npm as a dev dependancy you should be able to use the alias name for the package in your npm scripts

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cacheBust": "node -e \" var test = require('file-cache-bust'); test.fileCacheBust('fake.html', ['fake.js', 'fake.css']);\""
},
```

If you cloned the repo and intend to use out side of node-modules: 
You will need to call node --eval and create a var to hold the module object. Then use the var to trigger the module and it's arguments. 

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cacheBust": "node -e \" var test = require('../fileCacheBust'); test.fileCacheBust('fake.html', ['fake.js', 'fake.css']);\""
},
```

## Arguments

* String: of the file path and file name. This is relative to where the npm script is being called. 
* Array: of css and js files (strings) referenced in the file that need to be cache busted.

'use strict';

var fs = require('fs');
var regexFactory = require('./lib/regexFactory.js');
var hashGen = require('./lib/hashGenFactory.js');

var fileCacheBust = function(file, matchArray) {
    var newHash = hashGen.returnHash();
    newHash = `${newHash}`;

    var data = fs.readFileSync(file, 'utf-8');

    for(var match in matchArray){
        data = regexFactory.regExFactory().fileName(matchArray[match], data, newHash);
    };
    fs.writeFileSync(file, data, 'utf-8');
    console.info('Finished busting caches.');
};

module.exports.fileCacheBust = fileCacheBust;
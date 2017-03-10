'use strict';

var fs = require('fs');
var path = require('path');
var regexFactory = require('./lib/regexFactory.js');
var hashGen = require('./lib/hashGenFactory.js');

exports.filecachebust = (file, matchArray) => {
    var newHash = hashGen.returnHash();
    newHash = `?rel=${newHash}`;

    fs.exists(file, (exists) => {
        if (exists) {
            fs.readFileSync(file, 'utf-8', (error, success) => {
                var data = success.toString();
                for(match in matchArray){
                    data = regexFactory.fileName(matchArray[match], data, hash);
                };
                fs.writeFileSync(file, data, 'utf-8');
            });
        }
    })
}
const fs = require('fs');
const util = require('util');

module.exports.action = (output, data, user) => {
    output(util.format("Saving this for you %s...", user));
    
    var dir = "../files/" + user;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    /*fs.writeFile(dir + "/" + data.n, data.m, function(err) {
        if(err) {
            return console.log(err);
        }
    
        output("The file was saved!");
    }); */
};
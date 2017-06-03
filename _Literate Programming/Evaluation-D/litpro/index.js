var fs = require('fs');
var Folder = require('literate-programming-lib');
var folder = new Folder();
var gcd = folder.gcd;
var colon = folder.colon;

gcd.on("need document", function(rawname) {
    var safename = colon.escape(rawname);
    fs.readfile(rawname, { encoding: 'utf8' }, function(err, text) {
        if (err) {
            gcd.emit("error:file not found:" + safename);
        } else {
            folder.newdoc(safename, text);
        }
    });
});

gcd.on("file ready", function(text, evObj) {
    var filename = evObj.pieces[0];
    fs.writefile(filename, text);
});

gcd.emit("need document:first.md");
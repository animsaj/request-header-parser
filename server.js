var http = require('http');
var buildHTML = require('./buildHTML');

http.createServer(function (request, response) {
    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    ip = ip.substr(0, 7) === '::ffff:' ? ip.substr(7) : ip;
    //returned is a string; convert it to array and select the first item
    var languageArray = request.headers["accept-language"].split(',');
    var language = languageArray[0];
    //returned is a string; with match returned is array of matches
    var OSArray = request.headers['user-agent'].match(/\((.*?)\)/);
    //select the first item/the whole string that matches and remove ()
    var OS = OSArray[0].substr(1, OSArray[0].length - 2);
    var html = buildHTML(ip, language, OS);
    response.end(html);
}).listen(process.env.PORT || 8080);
var buildHTML = function(ip, lang, OS) {
    return `<!DOCTYPE html>
            <html>
            <head>
                <title>Request Header Parser</title>
                <style>
                    body {
                        background-color: #222222; 
                        color: aqua; 
                        font-family: 'Inconsolata'; 
                        font-size: 24px;
                    }
                </style>
            </head>
            <body>
                <h1>Hello, from Request Header Parser!</h1>
                <ul>
                    <li>Your ip is: ${ip}</li>
                    <li>Your language is: ${lang}</li>
                    <li>Your OS is: ${OS}</li>
                </ul>
            </body>
            </html>`
}

module.exports = buildHTML;
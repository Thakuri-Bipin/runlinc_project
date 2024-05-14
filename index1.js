const ngrok = require('@ngrok/ngrok'); // ngrok module to expose your local server to the internet
const http = require('http');

const authToken = '2eoZ6uQ6CFvMLEUF0lPGOCt6FP1_ofLF7WmgJTr21QSb8Gb7';

// Create webserver
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Congrats you have created an ngrok web server');
}).listen(4000, () => console.log('Node.js web server at 4000 is running...'));
// ngrok.consoleLog("INFO"); // info logging

ngrok.authtoken(authToken);
ngrok.connect({
    addr: 3000,
    // addr: 'http://192.168.137.61',
    oauth_provider: "google",
    oauth_allow_emails: ["bipinoct18@gmail.com", "thkrbipin@gmail.com"],
    //request_header_add: ["ngrok-skip-browser-warning", "2341"],
})
    .then(listener => console.log(`Ingress established at: ${listener.url()}`));

// ngrok.forward({
//     allow_user_agent: [],
//     //request_header_add: ["ngrok-skip-browser-warning", "2341"],

// });
// // Get your endpoint online
// // .connect({ addr: 'http://192.168.137.61' })



// // async function createListener() {
// //     const builder = await new ngrok.SessionBuilder();
// //     builder.authtoken(authToken);
// //     builder.serverAddr('3000');

// //     builder.connect().then((session) => {
// //         session.httpEndpoint().listen().then((listener) => {
// //             console.log(`Ingress established at: ${listener.url()}`);
// //             // listener.forward('3000');
// //         });
// //     });

// // }

// // createListener();
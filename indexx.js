// Importing the necessary modules
const express = require('express'); // Express framework for building web applications
const ngrok = require('@ngrok/ngrok'); // ngrok module to expose your local server to the internet
const app = express(); // Create an instance of Express
const http = require('http');

const authToken = '2eoZ6uQ6CFvMLEUF0lPGOCt6FP1_ofLF7WmgJTr21QSb8Gb7';

// Create webserver
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Congrats you have created an ngrok web server');
}).listen(4000, () => console.log('Node.js web server at 4000 is running...'));

ngrok.authtoken(authToken);
ngrok.forward({
    request_header_add: ["ngrok-skip-browser-warning", "2341"],

});
// Get your endpoint online
ngrok.connect({ addr: 'http://192.168.137.61' })
    .then(listener => console.log(`Ingress established at: ${listener.url()}`));

// const UNIX_SOCKET = "localhost:3000";
// const fs = require("fs");
// try {
//   fs.unlinkSync(UNIX_SOCKET);
// } catch {}


// // make webserver
// const http = require("http");
// //const UNIX_SOCKET = 4000;
// http
//     .createServer(function (req, res) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("Congrats you have a created an ngrok web server");
//         res.end();
//     })
//    // .listen(UNIX_SOCKET, () => console.log(`Node.js web server at ${UNIX_SOCKET} is running...`));; // Server object listens on unix socket
//     .listen(4000, () => console.log(`Node.js web server at 4000 is running...`));; // Server object listens on unix socket
// // console.log("Node.js web server at", UNIX_SOCKET, "is running..");

// // setup ngrok
// const ngrok = require("@ngrok/ngrok");
// // import ngrok from '@ngrok/ngrok' // if inside a module
// ngrok.consoleLog("INFO"); // turn on info logging

// builder = new ngrok.SessionBuilder();
// builder
//      .authtoken("2eoZ6uQ6CFvMLEUF0lPGOCt6FP1_ofLF7WmgJTr21QSb8Gb7")
//     //.authtokenFromEnv()
//     .metadata("Online in One Line")
//     .clientInfo("ngrok-http-full", "1.2.3")
//     // .caCert(fs.readFileSync('ca.crt'))
//     //.serverAddr('192.168.137.61')
//     .handleStopCommand(() => {
//         console.log("stop command");
//     })
//     .handleRestartCommand(() => {
//         console.log("restart command");
//     })
//     .handleUpdateCommand((update) => {
//         console.log(
//             "update command, version:",
//             update.version,
//             "permitMajorVersion:",
//             update.permitMajorVersion
//         );
//     })
//     .handleHeartbeat((latency) => {
//         console.log("heartbeat, latency:", latency, "milliseconds");
//     })
//     .handleDisconnection((addr, error) => {
//         console.log("disconnected, addr:", addr, "error:", error);
//     });

// builder.connect().then((session) => {
//     session
//         .httpEndpoint()
//         // .allowCidr("0.0.0.0/0")
//         // .allowUserAgent("^mozilla.*")
//         // .basicAuth("ngrok", "online1line")
//         // .circuitBreaker(0.5)
//         // .compression()
//         // .denyCidr("10.1.1.1/32")
//         // .denyUserAgent("^curl.*")
//         // .domain("<somedomain>.ngrok.io")
//         // .mutualTlsca(fs.readFileSync('ca.crt'))
//         // .oauth("google", ["<user>@<domain>"], ["<domain>"])
//         // .oauth("google", ["<user>@<domain>"], ["<domain>"], ["<scope>"], "<id>", "<secret>")
//         // .oidc("<url>", "<id>", "<secret>", ["<user>@<domain>"], ["<domain>"], ["<scope>"])
//         // .proxyProto("") // One of: "", "1", "2"
//         // .removeRequestHeader("X-Req-Nope")
//         // .removeResponseHeader("X-Res-Nope")
//         // .requestHeader("X-Req-Yup", "true")
//         // .responseHeader("X-Res-Yup", "true")
//         // .scheme("HTTPS")
//         // .verifyUpstreamTls(false)
//         // .websocketTcpConversion()
//         // .webhookVerification("twilio", "asdf")
//         .metadata("example listener metadata from nodejs")
//         .listen()
//         .then((listener) => {
//             console.log("Ingress established at:", listener.url());
//             //listener.forward(UNIX_SOCKET);
//         });
// });
const { v4: uuidv4 } = require("uuid");

const ngrok = require('@ngrok/ngrok'); // ngrok module to expose your local server to the internet
const express = require('express');
const cors = require('cors');
import serverless from "serverless-http";

const app = express();
app.use(express.json());



const authToken = '2eoZ6uQ6CFvMLEUF0lPGOCt6FP1_ofLF7WmgJTr21QSb8Gb7';

var userEmails = ["bipinoct18@gmail.com", "suren.dhakal111@gmail.com"];
var ingressUrl = "";

var users = [
    {
        "id": uuidv4(),
        "username": "john@gmail.com",
        "password": "12345",
        "isActive": "1",
    },
    {
        "id": uuidv4(),
        "username": "user@gmail.com",
        "password": "1234",
        "isActive": "1",
    },
];

// Create webserver
//http.createServer((req, res) => {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.end('Congrats you have created an ngrok web server');
//}).listen(4000, () => console.log('Node.js web server at 4000 is running...'));
// ngrok.consoleLog("INFO"); // info logging


// ngrok.authtoken(authToken);
// ngrok.connect({
//     addr: 3000,
//     addr: 'http://192.168.137.61',
//     oauth_provider: "google",
//     oauth_allow_emails: userEmails,
//     request_header_add: "ngrok-skip-browser-warning:2222",
// }).then(listener => {
//     ingressUrl = listener.url().toString();
//     console.log(`Ingress established at: ${listener.url()}`);
// });



app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('NodeJs API Working....');
    res.end();
});


app.get('/dummy', cors(), (req, res) => {
    res.send(users);
});

app.get('/getAllUsers', cors(), (req, res) => {
    res.send(users);
});

// register user
app.post('/register', cors(), (req, res) => {
    const { username, password } = req.body;
    console.log("register/" + username + "-" + password);
    const newUser = {
        "id": uuidv4(),
        "username": username,
        "password": password,
        "isActive": "1",
    };

    users.push(newUser);
    userEmails.push(username);
    console.log(username);
    res.status(200).send(newUser);
});

//login user
app.post('/login', cors(), (req, res) => {
    const { username, password } = req.body;
    console.log("login/" + username + "-" + password);
    const index = users.findIndex(user =>
        (user.username == username && user.password == password)
    );
    if (index == -1) {
        console.log('index' + index)
        res.status(404).send('404');
    } else {

        const user = users[index];
        console.log('user' + user.username);
        res.status(200).send(user.username);
    }


});

app.get('/getNgrokUrl', cors(), (req, res) => {
    res.send(ingressUrl.toString());
})

app.use(cors());

app.listen(4000, () => {
    console.log("Server successfully running on port 4000");
});

export const handler = serverless(api);
let serverPort = 8000
let webDir = "../wwwroot";

let express = require('express');
let app = express();
app.use(express.static(webDir));


let bodyParser = require('body-parser')
app.use(bodyParser.raw({type:'image/*'}));

let realmApi = require('./realmapi');
realmApi(app);
let rulerApi = require('./rulerapi');
rulerApi(app);
const path = require('path')

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, webDir, 'index.html'))
})

app.listen(serverPort);
console.log('Server listening on http://localhost:'+serverPort);
console.log('Distributing site from: '+webDir);
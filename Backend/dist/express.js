"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const express_db_1 = require("./express_db");
const app = express();
const port = 3000;
const db = new express_db_1.MySQL();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
function AccessControlAllow(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,token,Authorization');
    next();
}
app.all('*', AccessControlAllow);
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/test', (request, response) => {
    let anfrage = request.body;
    response.json(anfrage);
});
app.post('/select', (request, response) => {
    console.log(request.body);
    db.getContent(request.body)
        .then((x) => response.json(x))
        .catch((err) => response.status(500).json(err));
});
app.post('/insert', (request, response) => {
    db.insertTodo(request.body)
        .then((x) => response.json(x))
        .catch((err) => response.status(500).json(err));
});
app.post('/delete', (request, response) => {
    db.deleteTodo(request.body)
        .then((x) => response.json(x))
        .catch((err) => response.status(500).json(err));
});
app.post('/update', (request, response) => {
    db.updateTodo(request.body)
        .then((x) => response.json(x))
        .catch((err) => response.status(500).json(err));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=express.js.map
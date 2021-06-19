const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/favorites')
    .get((req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        console.log("Get /favorites")

        setTimeout(() => {
            res.send({"Status": "OK"});
        },0);
    })
    .post((req, res) => {
        res.set("Access-Control-Allow-Origin", '*');
        console.log('Post /favorites');
        console.log(req.body);

        setTimeout(() => {
            res.send(req.body);
        },0);
    })
    .delete((req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        console.log(req.body);
        console.log('Delete /favorites');

        setTimeout(() => {
            res.send(req.body);
        },0);
    })
    .put((req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        console.log(req.body);
        console.log('Put /favorites');

        setTimeout(() => {
            res.send(req.body);
        },0);
    });
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server started');
    console.log('Port: ', port);
})
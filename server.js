const express = require('express');

const app = express();
const port = 5000;

app.use(express.static('server'));
app.use(express.json());

app.listen(port, () => {
    console.log('I\'m the port I\'m the port I\'m the port I\'m the port, I am the port', port);
});

app.get('/math', function(req, res) {
    console.log('Req method: ', req.method);
    console.log('Req for /math was made');
    res.send({
        object: {
            aMath: aMath,
            answer: answer
        }

    });

});
app.post('/math', function(req, res) {
    console.log('We have the equation', req.body);
    res.sendStatus(201)
})


let aMath = [1, 2, 3];

let answer = '42';
const express = require('express');

const app = express();
const port = 5000;

app.use(express.static('server'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

    let problem = req.body.mathProblem;

    let firstN = problem.num1;
    let secondN = problem.num2;
    let opp = problem.operator;
    switch (Number(opp)) {
        case 1:
            answer = Number(firstN) + Number(secondN);
            aMath.push(`${firstN}+${secondN}=${answer}`);
            break;
        case 2:
            answer = Number(firstN) - Number(secondN);
            aMath.push(`${firstN}-${secondN}=${answer}`);
            break;
        case 3:
            answer = Number(firstN) * Number(secondN);
            aMath.push(`${firstN}x${secondN}=${answer}`);
            break;
        case 4:
            answer = Number(firstN) / Number(secondN);
            aMath.push(`${firstN}÷${secondN}=${answer}`);
            break;

        default:
            console.log('error');
            break;
    }


    console.log('array', aMath);
    res.sendStatus(201)
});


let aMath = [];

let answer = 0;
$(document).ready(connected);

function connected() {
    console.log('JQ');
    math();
}

function math() {
    $.ajax({
            method: 'GET',
            url: '/math'
        })
        .then(function(showMath, answer) {
            console.log('Your math Sir', showMath);
            nowShowMath(showMath);
            showAnswer(answer);
        })
        .catch(function(error) {
            console.log('Do you even math bro!', error);
        });
}

function showAnswer(showMe) {
    console.log('Show me the money ', showMe);
    $('#showMe').empty();
    $('#showMe').append(showMe);
}

function nowShowMath(sMath) {
    console.log('sMath', sMath);
    $('#mathList').empty();

    for (let past of sMath) {
        $('#mathList').append(`<li>${past}</li>`);
    }
}

let opps = 0;

function doMath() {
    $.ajax({
            method: 'POST',
            url: '/math',
            data: {
                problem: {
                    num1: $('#num1').val(),
                    num2: $('#num2').val(),
                    operator: opps,
                    answer: ''
                }
            }
        })
        .then(function(banana) {
            console.log('Equation sent');
            math();
        })
        .catch(function(error) {
            alert('Do better Joshua');
        });
    $('#num1').val('');
    $('#num2').val('');
}
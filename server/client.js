$(document).ready(connected);

function connected() {
    console.log('JQ');
    math();
    $('#1').on('click', setOpp1);
    $('#2').on('click', setOpp2);
    $('#3').on('click', setOpp3);
    $('#4').on('click', setOpp4);
}

function math() {
    $.ajax({
            method: 'GET',
            url: '/math'
        })
        .then(function(showMath) {
            console.log('Your math Sir', showMath);
            nowShowMath(showMath.object.aMath);
            showAnswer(showMath.object.answer);
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

var opps = 0;

function setOpp1() {
    opps = 1
}

function setOpp2() {
    opps = 2
}

function setOpp3() {
    opps = 3
}

function setOpp4() {
    opps = 4
}


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
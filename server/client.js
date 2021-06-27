$(document).ready(connected);

function connected() {
    console.log('JQ');
    math();
    showAnswer('none')
    $('#1').on('click', setOpp1);
    $('#2').on('click', setOpp2);
    $('#3').on('click', setOpp3);
    $('#4').on('click', setOpp4);
    $('#equal').on('click', doMath)
    $('#yes').on('click', deletE);
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
        $('#mathList').prepend(`<li>${past}</li>`);
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
    if (($('#num1').val()) === '') {
        alert('PUT IN THE FIRST NUMBER!!!...please');
    } else if (($('#num2').val()) === '') {
        alert('YOU FORGOT THE SECOND NUMBER!!!');
    } else if (opps === 0) {
        alert('PICK AN OPERATOR!!!');
    } else if ((opps === 4) && (Number($('#num2').val() == 0))) {
        alert('DO NOT F WITH ME YOU CAN NOT DIVIDE BY ZERO');
    } else {
        $.ajax({
                method: 'POST',
                url: '/math',
                data: {
                    mathProblem: {
                        num1: $('#num1').val(),
                        num2: $('#num2').val(),
                        operator: opps
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
        opps = 0;
    }
}
let u = 1 / 0;
console.log('whats up', u);

function deletE() {
    $.ajax({
            method: 'DELETE',
            url: '/math',
            data: {

            }
        })
        .then(function() {
            console.log('hey where did all of our math go?');
            math()
        })
        .catch(function() {
            alert('you will never delete the history of MATH')
        })

}

// ((Number($('#num1').val()) === Number) && (Number($('#num2').val()) === Number) && (opps > 0))
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
        .then(function(showMath) {
            console.log('Your math Sir', showMath);
            nowShowMath(showMath);
        })
        .catch(function(error) {
            console.log('Do you even math bro!', error);
        });
}

function nowShowMath(sMath) {
    console.log('sMath', sMath);
}
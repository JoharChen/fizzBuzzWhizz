'use strict';

function fizzBuzzWhizz(num) {

    if (num.toString().indexOf('3') >= 0) {
        return 'fizz';
    }

    else if (num % 3 == 0 && num % 5 !== 0 && num % 7 != 0) {
        return 'fizz';
    }

    else if (num % 5 == 0 && num % 3 !== 0 && num % 7 != 0) {
        return 'buzz';
    }

    else if (num % 7 == 0 && num % 5 !== 0 && num % 3 != 0) {
        return 'whizz';
    }

    else if (num % 3 == 0 && num % 5 == 0 && num % 7 != 0) {
        return 'fizzbuzz';
    }

    else if (num % 3 == 0 && num % 5 != 0 && num % 7 == 0) {
        return 'fizzwhizz';
    }

    else if (num % 3 != 0 && num % 5 == 0 && num % 7 == 0) {
        return 'buzzwhizz';
    }

    else if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
        return 'fizzbuzzwhizz';
    }

    else {
        return num.toString();
    }
}

for(let i=0; i<100; i++){
    console.log(fizzBuzzWhizz(i)+'\n');
}


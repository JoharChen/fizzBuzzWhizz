'use strict';

function fizzBuzzWhizz(num) {
    var flag = false;
    var str= '';
    if (num.toString().indexOf('3') >= 0) {
        str = 'fizz';
        flag = true;
    } else
    {
        if(num%3==0){str+='fizz'; flag = true; }
        if(num%5==0){str+='buzz'; flag = true;}
        if(num%7==0){str+='whizz';flag = true; }
    }
    if(flag==false) {str+=num;}
    return str;
}


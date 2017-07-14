'use strict';

describe('fizzBuzzWhizz', () => {


    it('when number includes 3 , should return fizz', () =>{
        let num=13;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'fizz';
        expect(actualResult).toEqual(expectedResult);

    });

    it('when number is time of 3 , should return fizz', () =>{
        let num=33;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'fizz';
        expect(actualResult).toEqual(expectedResult);

    });


    it('when number is time of 5 , should return buzz', () =>{
        let num=5;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'buzz';
        expect(actualResult).toEqual(expectedResult);

    });

    it('when number is time of 7 , should return whizz', () =>{
        let num=7;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'whizz';
        expect(actualResult).toEqual(expectedResult);

    });

    it('when number is time of 3&5, should return fizzbuzz', () =>{
        let num=15;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'fizzbuzz';
        expect(actualResult).toEqual(expectedResult);

    });

    it('when number is time of 3&7, should return fizzwhizz', () =>{
        let num=42;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'fizzwhizz';
        expect(actualResult).toEqual(expectedResult);

    });

    it('when number is time of 5&7, should return buzzwhizz', () =>{
        let num=70;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'buzzwhizz';
        expect(actualResult).toEqual(expectedResult);

    });

    it('when number is time of 3&5&7, should return fizzbuzzwhizz', () =>{
        let num=105;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = 'fizzbuzzwhizz';
        expect(actualResult).toEqual(expectedResult);

    });

    it('when number is not time of 3 Or 5 Or7, should return num', () =>{
        let num=11;
        const actualResult = fizzBuzzWhizz(num);
        let expectedResult = '11';
        expect(actualResult).toEqual(expectedResult);

    });



});


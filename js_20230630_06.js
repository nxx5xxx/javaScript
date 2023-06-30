// 문자열 연산
/* 연산자 의미 - 반환하는 여부

    x==y 값이 같다.
    x===y 자료형도 값도 같다. 권장
    x != y 값이 다르다
    x !== 자료형 또는 값이 다르다. 권장
    x < y   ASCII CODE 순서 상(사전상) x가 먼저 온다
    x <= y  ASCII CODE 순서 상(사전상) x가 먼저 오거나 같다.
    x > y   ASCII CODE 순서 상(사전상) y가 먼저 온다 (x의 ASCII CODE가 더 크다)
    x >= y  ASCII CODE 순서 상(사전상) y가 먼저 오거나 같다.
*/

console.log('강아지'==='강아지');
console.log('강아지'==='강아지고양이');
console.log('강아지'>'강아지고양이');
console.log('강아지'<'강아지고양이');
console.log('111'>'112');
console.log('111'<'112');

console.log(
    'ABC' < 'abc',
    'apple' <= 'banna',
    '다라마' > '바자차',
    'it' > 'ai'
)

console.log(100>12);
console.log('100'>'12');
//숫자와 문자열을 비교하면 
//문자를 자동으로 숫자로 변환해서 비교한다
console.log('100'>12);
console.log('ㄴ'>'ㅈ');

let number = 10;
console.log(number);
number = number +1;
console.log(number);
number += 1;
console.log(number);

let str4 = 'Hello'
str4 = str4 + 'Node.js'
console.log(str4);
str4 += 'Spring Framework'
console.log(str4);

let str5 = str4 += '~~~~~~~'
console.log(str5);



/*
# string타입 number로 형변환

    parseInt(숫자 모양의 문자열) : 문자열이 정수형으로 변환됨
    parseFloat(숫자모양의 문자열) : 문자열이 실수형으로 변환됨
    Number(숫자모양의 문자열) : 문자열이 숫자로 변환됨

*/

/**
### boolean type의 값을 숫자로 형변환
    Number()
    console.log(Number(true)); --- 1
    console.log(Number(false)); ---0
 */

console.log(Number(true));
console.log(Number(false));


let str6 = 'hello' + 1234 + true;
console.log(str6);
str6 += null;
console.log(str6);
str6 += undefined;
console.log(str6);
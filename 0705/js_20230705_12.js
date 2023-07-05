/*
    built-in global property
    내장 전역 속성
*/


console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);
console.log(globalThis.undefined);

/*
    built-in global function
    내장 전역 함수
*/

// eval()
let result = 10 + 21 + 62;
console.log('result : ', result);

result = '10 + 21 + 62';
console.log('result : ', result);
console.log(eval('10 + 21 + 62'));

const code = `
let num1 = 10;
console.log(num1 + 100);
`

eval(code);

// isFinite();
console.log(isFinite(1));
console.log(isFinite(0));
console.log(isFinite('1'));
console.log(isFinite(null));
console.log(isFinite(1/0));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite('사랑'));


console.log('---------------------');
//isNaN() 숫자로 인식되지 않는값은 true

console.log(isNaN(1));
console.log(isNaN(0));
console.log(isNaN('1'));
console.log(isNaN(null));
console.log(isNaN(1/0));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));
console.log(isNaN('사랑'));

// parseInt() : ()안에 있는 값을 정수로 변환

console.log(parseInt(123.32));
// 11을 ,뒤에 진수로
console.log(parseInt('11',2));
console.log(parseInt('11',16));
console.log(parseInt('11',32));
console.log(parseInt('55',32));
console.log(parseInt('55',36));
console.log(parseInt('55',37));

// parseFloat() : ()안에 있는 값을 실수로 변환
console.log(parseFloat(123/333))
console.log(parseFloat('123ABC'))
console.log(parseFloat('123슈루룩'))
console.log(parseFloat([123,456,789]))
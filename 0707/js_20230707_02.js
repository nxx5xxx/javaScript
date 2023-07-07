/*
    Number Object
*/

const num1 = new Number();
const num2 = new Number(5432);
const num3 = new Number(54.32);

//객체와 값이함께나옴
console.log(num1);
console.log(num2);
console.log(num3);

//값만빼오기
console.log(num1.valueOf());
console.log(num2.valueOf());
console.log(num3.valueOf());

//문자열로 넣어보기
// 숫자로 인식될수있는것은 숫자로 , 아닌것은 NaN으로 나온다
console.log(new Number('123456'));
console.log(new Number('-123456'));
console.log(new Number('Infinity'));
console.log(new Number(Infinity));
console.log(new Number('false'));
console.log(new Number(false));

console.log('----------------------');
//계산식 넣어보기
console.log(new Number('10/5'));
console.log(new Number(10/5));
// 배열 , 객체 , 숫자와상관없는 문자열은 다 NaN을 반환한다

console.log('----------------------');
// 넘버객체에있는 static property
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// isFinite(null) <-- 문자인지 아닌지

console.log(isFinite(null));
console.log(isFinite(1234));


// Number.isFinite() <-- 유한한 숫자인지 알아봄
console.log(Number.isFinite(null));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(123));

console.log('----------------------');
/*
    parseInt(정수모양의 문자열) : 정수로 변환
    parseFloat : 실수로 변환
    isInteger() 정수인지 아닌지 알아보는메소드
    
    Number.isSafeInteger() :정수의 범위가 맞는지 알아봄
    자바스크립트에서 정수의 범위는
    -(2**53 - 1 )~ (2**53 +1)
*/

console.log(Number.isSafeInteger(123));
console.log(Number.isSafeInteger(123.123));

// toString(); 문자열로 반환 - ()안에 2진수에서 36진수까지 지정 가능하다
// 자바에서는 불가

console.log((1234).toString());
console.log((10).toString(2)); //2진수로 반환
console.log((10).toString(8)); //8진수로 반환
/*
    표준 내장 객체
    standard built-in object
*/

// browser
// console.log(window);
// PC


//내장객체 - 이미 있는 객체
console.log(global);
console.log(globalThis);

console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);

/*
    Wrapper Object (래퍼 객체)
    Number , String , Boolean
*/

const num1 = new Number(123);
console.log(num1);
console.log(num1.valueOf());
console.log(typeof num1);

const str1 = new String('강아지');
console.log(str1);
console.log(str1.valueOf());
console.log(typeof str1);

const b1 = new Boolean(true);
console.log(b1);
console.log(b1.valueOf());
console.log(typeof b1);
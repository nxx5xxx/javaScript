/*
    primitive type(원시타입)

    reference type(참조타입)
    원시타입은 값 자체가 복사되고 참조타입은 주소가 복사된다
*/

// 값 복사하기

let number1 = 10;
let str1 = '으라!';
let b1 = true;

// 할당(저장) : 복사
let number2 = number1
let str2 = str1;
let b2 = b1;

console.log(number1)
console.log(number2)
console.log(str1)
console.log(str2)
console.log(b1)
console.log(b2)

number1 = 20
str1 = '오예'
b1 = false

console.log(number1)
console.log(number2)
console.log(str1)
console.log(str2)
console.log(b1)
console.log(b2)

// 값 복사하기 : 레퍼런스 타입의 값을 복사하면(객체) 값 자체가 복사 되는게 아닌 값의 주소가 복사된다
// 주소가 레퍼런스
// 즉 객체는 변수공간이라고 생각하면 편하다
const person1 = {
    name : '고라니', age: 25, nickName:'가가가'
}

console.log(person1);
const person2 = person1; // 얕은복사
console.log(person2.nickName);
person1.nickName = '나나나';
//얕은복사이기 때문에 person2의 값도 바뀐다
console.log(person2.nickName);

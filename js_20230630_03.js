/*
    primitive data type
    원시타입
*/

let a = true;
let b = 3.14;
let c ='안녕';

// typeOf 연산자 : 자료형을 반환한다
// boolean
console.log(a, typeof a);

// number
console.log(b, typeof b);

// string
console.log(c, typeof c);


//Object , type, class , instance 넷다 95%정도가 비슷하다고 보면된다

let d;
console.log(d, typeof d);
d = null;
console.log(d, typeof d);

let e = Symbol('고양이');
console.log(e, typeof e);

// 자바스크립트 에서의 자료형 (data type)
// boolean, number, string, undefined, object, Symbol

//boolean
const b1 = 10>20;
const b2 = 10<20;
console.log(b1, typeof b1);
console.log(b2, typeof b2);

console.log(b1, typeof b1 , ':',b2, typeof b2);

// number
// 자바스크립트에서는 정수와 실수를 구분하지않고 모두 실수로 취급한다
let integer = 1234;
let realNumber = 6.25;
let negativeNumber = -654;
console.log(integer , realNumber, negativeNumber);
console.log(typeof integer , typeof realNumber, typeof negativeNumber);

//string type
let name1 = '이순신'
let name2 = '유관순'
// back trick ( tab키바로위 물결표시에있는 `)
let info = ` 이순신은 조선 중기의 무신이었다 본관은 덕수 머시기 자해,
시호는 충무 한성출신
동구비보 권관`

console.log(name1, name2);
console.log(info);

//undefined type
let position;
console.log(position)

let x = 500;
console.log('x : ' , x);
x = undefined;
console.log('x : ' , x);

x = null;

// null : 객체를 초기화 하는 값
//          객체가 연결되어 있지 않은 변수의 값
console.log('x : ' , x);
console.log('x : ', typeof x);

//변수가 null 인지 아닌지 알아보기
// === : 값과 type을 모두 비교
// == : 값만 비교
console.log(x === null);
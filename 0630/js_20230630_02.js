/*
    변수 선언 키워드
    var 를 썻엇지만
    2016년 버전 이후로
    let과 const로 나뉜다
    let (= 변수 선언)
    const(= constant 상수선언)



*/

const SAY_HELLO = 'Hello, ';
let name = '강아지';

console.log(SAY_HELLO);
console.log(name);

let number1;
console.log(number1); //선언후 초기화를 안해줘서 undefined로 표시됨

// let number1;
// let number1 =100;
// 선언 후 또 다시 선언 불가
/// 자바랑 비슷하다
let num1 = 100;
let num2 = num1;
console.log(num1, num2); //주소참조라 값을 메모리에 또 올리지않음

let var1 = 200;
let var2 = var1;
console.log(var1,var2);
var1 = 'java'
console.log(var1, var2);

let a,b,c;
let d=1,e=2,f=3;
let g, h=4,i;

// const a 불가


// name = 식별자
/*
### 식별자 이름 규칙
    영문, 한글(unicode 문자 모두 됨), 숫자 사용가능함
    첫 글자를 숫자로 시작할수 없음
    특수문자는 $, _만 가능하다
    공백문자는 사용불가

    예약어(reserved word / key word) 불가
    
*/
/*
    자바는 자바스크립트와 무관한 언어이다
    자바스크립트는 인터넷이 한창 뜰때 나온것 - 넷스케이프당시에 나옴(모질라재단 옛날에브라우저) 

    
    자바 : 먼저 메모리 공간의 type을 정한 후에 data를 저장
    자바스크립트 : 할당(저장) 되는 data에 의해서 type이 결정됨 - 즉 동적타입(변하는타입)
 */

    let number = 1234;
    number = '1234';
    number = true;
    number = null;
    
    let str1 = 'student';
    console.log(str1)
    console.log(str1.toUpperCase())

    function getUpperCase(id){
        return console.log(id.toUpperCase());
    }

    getUpperCase('ohYeah');

    // Runtime Error 발생 : 숫자는 대문자로 당연히 변환하지 못함.
//getUpperCase(123);

console.log(123+345)

let str2 = "";
let int2 = 123;
let str3 = str2+int2;
console.log(str3)
console.log(typeof str3)
console.log("123"+345)
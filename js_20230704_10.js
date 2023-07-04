//객체 선언시 property의 key와 할당할 변수나 상수의 이름이 같은경우
const a = 11 , b = 22;

const obj1 = {
    a : a, b : b
}

console.log(obj1);
console.log('-------------------');
// obj2 와 같이 :~ 를빼고 작성이 가능하다
const obj2 = {a,b}
console.log(obj2);
console.log('-------------------');

// 객체를 찍어내는 함수를 이름을 같은경우로 작성할때
function product(name , price , quantity){
    //{name:name, price:price, quantity:quantity}를 해야할것을
    // 받아들이는 변수 product(name, price, quantity)와
    // 생성할 객체이름 name , price, quantity가 같으므로 이렇게 줄일수가 있는것이다
    return {name, price, quantity}
}

const p1 = product('컴퓨터', 2000000, 30);
const p2 = product('키보드', 2000, 50);

console.log(p1);
console.log(p2);

///////////////////////////////////////////////
// 객체에 property 함수 작성하기
const person = {
    name : '강아지',
    sayHello : function(flag){
        return flag ? `${this.name} 님, 안녕하세요 ` : `${this.name} 님, 안녕히가세요`
    }
}
console.log(person.sayHello(true));
console.log(person.sayHello(false));

// method - 객체에 포함된 함수
const person2 = {
    name : '고양이',
    sayHello(flag){
        return flag ? `${this.name} 님, 안녕하세요 ` : `${this.name} 님, 안녕히가세요`
    }
}
console.log(person2.sayHello(true));
console.log(person2.sayHello(false));

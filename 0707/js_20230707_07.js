// Object 클래스
//     ㄴ 모든 객체들의 원형(prototype)

//instanceof - Object의 객체냐나는것 - Object의 자손이냐는것
console.log(new String('python') instanceof Object);
console.log(new Number(1234) instanceof Object);
console.log(new Array() instanceof Object);
console.log([] instanceof Object);
console.log((function(){}) instanceof Object);

console.log(new Object());
console.log(new Object(1234));
console.log(new Object('굳'));
console.log(new Object(false));
console.log(new Object([1,2,3]));
console.log(new Object(null));
console.log(new Object(undefined));

console.log('----------------------------');

//객체의 얕은복사
const person1 = {
    name1 :  '사람1'
}
const person2 = {...person1};
console.log(person1);
console.log(person1);
console.log('----------------------------');

// 객체에 다른객체 추가
// assign 
const person3 = {
    age : 23,
    isStudent : false
};
console.log(person3);
const career = {
    job: 'developer',
    position: 'teamleader'
}

Object.assign(person3,career);
console.log(person3);

console.log('----------------------------');

const obj1 = new Object();
const obj2 = {m:1 , n:2};
const obj3 = {n:3};
const obj4 = {o: {p:1}};
console.log(obj1);
Object.assign(obj1,obj2);
console.log(obj1);
Object.assign(obj1,obj3);
console.log(obj1);
Object.assign(obj1,obj4);
console.log(obj1);
// == Object.assign(obj1,obj2,obj3,obj4);
//같은키가 있을경우 나중에 나온 value가 덮어씌어진다
console.log('obj2.m : ', obj2.m);
console.log('obj4.o.p : ', obj4.o.p);

obj2.m = 555;
obj4.o.p = 999;
console.log('obj2.m : ', obj2.m);
console.log('obj4.o.p : ', obj4.o.p);
console.log(obj1);
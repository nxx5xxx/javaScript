// 객체의 key 를 수식으로 지정하기 (미국에선 값도 수식이라 한다)
let idx = 0;
const obj1 = {
    //idx가 증가하고 key-와 합쳐진다
    ['key-' + ++idx] : `value=$[idx]`,
    ['key-' + ++idx] : `value=$[idx]`,
    ['key-' + ++idx] : `value=$[idx]`,
    [idx ** idx ] : 'POWER'
}

console.log(obj1); 
/*
결과값
{
  '27': 'POWER',
  'key-1': 'value=$[idx]',
  'key-2': 'value=$[idx]',
  'key-3': 'value=$[idx]'
}
파이썬의 dictionary처럼 순서가 보장되지않는다
*/

// 객체나 배열을 key로 사용하기
const obj2 = {a : 1, b: 2};
const obj2_1 = {c : 3, d: 4};
const person = {name : "강아지", age:25, hobby: "독서"}
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const obj3 = {
    [obj2] : '객체(obj2)를 key로 지정함',
    [obj2_1] : '객체(obj2_1)를 key로 지정함',
    [person] : '객체(person)를 key로 지정함',
    [arr1] : '배열(arr1)을 key로 지정함',
    [arr2] : '배열(arr2)을 key로 지정함'
}

console.log(obj3[obj2]);
console.log(obj3[obj2_1]);
console.log(obj3[arr1]);
console.log(obj3[person]);
console.log(obj3[arr2]);
console.log(obj3);


// 객체나 배열을 key 로 사용하기 
// 해당 객체나 배열이 실제로 key 가 되는 것이 아니고
// 문자열로 바뀌어서(치환되어서) key 가 됨
// 2개이상일때 나중거로 덮어써진다
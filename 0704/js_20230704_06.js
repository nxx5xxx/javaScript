// 프리미티브타입은 a라는 공간에 값이 복사돼서 들어온다
// 레퍼런스타입은 b라는 공간에 값을 넣는게아니라 그 값에 대한 주소만 들어온다
let a = 1; //primitive type
let b = {  //reference type
    name : '강아지',
    age : 15
}

let c = [1,2,3];

console.log('test 함수 실행 전');
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);


function test1(n1, n2, n3){
    n1++;
    n2.name = '고양이';
    n2.age++;
    n3[0]++;

    console.log(n1, n2, n3);
}


test1(a,b,c);// 2 { name: '고양이', age: 16 } [ 2, 2, 3 ]
console.log('test 함수 실행 후');
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

console.log('-------------------------');

// Call By Value
function changeNumber(number){
    number++;
    console.log('number in changeNumber : ', number);
}

function test2(){
    let number = 10;
    console.log('--changeNumber() 함수 호출 전 --');
    console.log('number in test2 :' , number);
    changeNumber(number);
    console.log('--changeNumber() 함수 호출 후 --');
    console.log('number in test2 :' , number);
}

test2();

console.log('-------------------------');

// Call By Reference
function changeNumber3(arrNumbers){
    arrNumbers[0]++;
    console.log('arrNumbers in changeNumber : ', arrNumbers);
}

function test3(){
    let arrNumbers = [1,2,3,4,5];
    console.log('--changeNumber3() 함수 호출 전 --');
    console.log('arrNumbers in test3 :' , arrNumbers);
    changeNumber3(arrNumbers);
    console.log('--changeNumber3() 함수 호출 후 --');
    console.log('arrNumbers in test3 :' , arrNumbers);
}

test3();

//즉 Call by Value - 프리미티브타입은 값을올린놈만 올라가고
// Call by Reference - 레퍼런스타입은 값을 참조한 애 까지 올라간다
// 배열

const arr1 = [];
const arr2 = [1,2,3];
const arr3 = [1,2,3,4,5,6,7,8,9];
const arr4 = [1,2,3,4,5,6,,8,,10];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4); // 비어있는 배열을 표시해준다
console.log('---------------------');
console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log(arr4.length); // 비어있는 배열의 길이까지 합해준다
console.log('---------------------');
const arr5 = new Array();
console.log(arr5);
console.log(arr5.length);

console.log('---------------------');
//배열의 크기지정
const arr6 = new Array(5);
console.log(arr6);
console.log(arr6.length);
console.log(arr6[0]);
console.log(arr6[4]); 
console.log('---------------------');


// Array의 static method
// of() 를 쓰면 바로 배열을 만들면서 값을 넣는다
// 자바의 int[] arr1 = {~~~~}; 와 비슷
const arr7 = Array.of(7);
const arr8 = Array.of(1,2,3,4,5);
const arr9 = Array.of('java', false, null);
console.log(arr7);
console.log(arr8);
console.log(arr9);

console.log('---------------------');
// Array의 static method
// from()
// from으로하면 배열과 문자열 객체도 넣을수있다
const arr10 = Array.from([11,22,33,44,55]); //얘는 배열 자체
//문자를 나열하면 문자열 이런걸 유사배열이라한다
// c언에서는 스트링이없어서 문자를 이용하여 문자열을 만든다
const arr11 = Array.from('javascript');
const arr12 = Array.from({name1 : '강아지' , age : 23, height:188, weight: 80});
console.log(arr10);
console.log(arr11);
console.log(arr12);

console.log('---------------------');

// index property 와 Length property가 있는 객체
const fruit = {
    0: 'strawberry',
    1: 'banana',
    2: 'watermelon',
    3: 'mango',
    4: 'peach',
    5: 'grape',
    length : 6
}

//iterable = 순회할수있는
// 이터러블 타입은 배열 , 문자열이 이터러블타입
//객체는 이터러블 타입이 아니라 아래것이 작동안함
/*
for(const item of fruit){
    console.log(item);
}
*/

//객체의 순회
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
console.log('---------------------');
//이렇게하면 이터러블 취급을해서 향상된 포문사용가능
for(const item of Array.from(fruit)){
    console.log(item);
}
console.log('---------------------');

// 얕은복사 (shallow copy) : 1차원 단계에서의 복사
const arr13 = [1,2,3,4,5];
const arr14 = arr13; //주소만 복사함
console.log(arr13);
console.log(arr14);
arr14[0] = 5;
arr14.push(6);
console.log(arr13);
console.log(arr14);
//결국 같은배열의 참조라 값이 둘다 바뀜
console.log('---------------------');
//  1차원까지에서만 깊은복사가 이뤄진다
const arr15 = [1,2,3,4,5];
const arr16 = Array.from(arr15);// arr15주소지에 있는 배열을 복사해와서 메모리에 올림
console.log(arr15);
console.log(arr16);

arr16[0] = 5;
arr16.push(6);
console.log(arr15);
console.log(arr16);
console.log('---------------------');



// slice를 해도 얕은 복사가 된다
const arr17 = arr15.slice(0,5);
console.log(arr17);
console.log('---------------------');
// 깊은복사 (deep copy) : 1 , 2 차원 단계에서의 복사

//얘는 1차원만 복사돼서 얕은복사다
const arr18 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

const arr19 = Array.from(arr18);

console.log('arr18 :', arr18);
console.log('arr19 :', arr19);

arr18[1][1] = 5555;

console.log('arr18[1][1] :', arr18);
console.log('arr19[1][1] :', arr19);

console.log('---------------------');
// 2차원까지 복사하려면
// for문을 이용해서 복사하면 깊은복사가 이루어진다
for(let idx in arr18){

}

//맵함수를 이용한 깊은복사
// map() 함수

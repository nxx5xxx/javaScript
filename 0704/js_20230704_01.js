/*
    함수 - 일급객체

    1) 변수나 상수에 함수를 할당할 수 있음

    2) 다른 함수의 parameter에 전달됨

    3) return 값으로 함수를 사용할 수 있음
*/

function add(n1, n2){
    return n1 + 2;
}

console.log(typeof add); //-- function

// 1) 함수를 변수나 상수에 할당가능
const add2 = add;

console.log(add(10,20));
console.log(add2(10,20));

let a = 7;
let b = 3;

let funct1 = (n1, n2) => n1 + n2;
let funct2 = (n1, n2) => n1 - n2;

console.log(funct1(a,b));
console.log(funct2(a,b));

//key의 밸류에 함수를 할당 즉,변수에 할당가능 ( 객체에 함수할당 )

let student = {
    name : '강아지',
    age : 22,
    studno : 23222,
    introduce : function (param){
        result = param ? '안녕하세요' : '안녕히 가세요';
        return result
    }
}
//속성이4개 함수가1개
console.log(student.introduce(true)); // - 안녕하세요


//함수를 배열에 할당가능

let calculation = [
    (n1,n2) => n1 + n2,
    (n1,n2) => n1 - n2,
    (n1,n2) => n1 * n2,
    (n1,n2) => n1 / n2,
]

//함수를 하나씩 호출하기
for(cal of calculation){
    console.log(cal(10,8));
}



// 객체의 함수(property-속성)에서 객체의 속성(property)을 사용할 때는
// this. 를 붙이고 , 함수 property 내부의 지역변수를 사용할경우에는 this를 붙이지 않는다

let student2 = {
    name1 : '강아지',
    age : 22,
    studno : 23222,
    introduce : function (param){
        let height = 185;
        result = `안녕하세요, 저는 ${this.name1} 이고, ${this.age} 세 이며, 학번은 ${this.studno} 입니다 . 키는 ${height} 입니다`;
        return result
    }
}

console.log(student2.introduce());

/*
    함수를 다른 함수의 parameter에 전달할 수 있음
     f1         f2      ㄴ > 파라미터에 전달할 때는 함수 이름을 전달 (test1() 이 아닌 test1만)
    고차함수 / 콜백함수

    고차함수 : parameter에 함수(f1)를 전달받는 함수(f2)
        ㄴ higher-order function
    콜백함수 : 다른 함수의 parameter에 전달되는 함수(f1)
        ㄴ callback function

     test함수 호출하는 code
    test()
     test 하는 이름표가 저장한 함수의 주소
    test
*/

let arr1 = [1,2,3,4,5];

// 고차함수
function test1(arr, funct){
    for(item of arr){
        funct(item);
    }
}

// 콜백함수
function subFunct(number){
    return console.log(number ** 2);
}

// test1 :  고차함수
// subFunct : 콜백함수
test1(arr1,subFunct);

//test1 : 고차함수
// console.log : 콜백함수
test1(arr1,console.log);


///////////
console.log("-----------------------------");
//////////
function test2(funct , repeat , n1, n2){
    let result = n1;
        for(let i=0;i<repeat;i++){
            result = funct(result, n2);
        }
    return result;
}

console.log(test2((a,b)=>a*b,5,10,4));

console.log(test2((a,b)=>a/b,5,10,4));
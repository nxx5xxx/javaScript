// 함수정의하기
// 익명함수나 화살표 함수는 hoisting 이 안된다

//이름이 있는 함수 - add라는 이름
function add(n1, n2){
    result = n1 + n2;
    return result;
}

console.log(add(10,20));

// 변수나 상수에 함수를 할당할 수 있음
//이름이 없는 함수(anonymous function)
const subtract = function (n1,n2){
    result = n1 - n2;
    return result;
}

console.log(subtract(20,10));

// 결국 기능적으로 둘다 같다

//내용이 메모리에 올라가고 그 주소가 add나 subtract라는 곳에 붙는것
//결국 함수 이름도 변수다

function add2(n1, n2){
    return n1 + n2;
}
console.log(add2(30,50));
add2 = function (n1, n2){
    console.log(`${n1} 과(와) ${n2}를 더합니다`)
    return n1 + n2;
}
console.log(add2(30,50));
//오버라이딩이라생각하면된다


//화살표함수 (람다)
// 1) 내용이 간단한 함수
const multiply = (n1,n2) => n1 * n2 ;
console.log(multiply(2,3));
/*
const multiply = function(n1,n2){ 
    return n1 * n2 ;
};
*/

// 2) 내용이 두줄 이상 있는경우
const multiply2 = (n1,n2) => {
    console.log(`${n1} 과(와) ${n2}를 곱합니다`)
    return n1 * n2;
}

// 3) parameter 가 하나인 경우에는
//  ()를 생략할 수 있다
const pow1 = n1 => n1**2;
//const pow1 = (n1) => n1**2;
//pow는 제곱한다는 의미

console.log(pow1(3));
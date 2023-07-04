
let add = (n1,n2) => n1+n2;
let subtract = (n1,n2) => n1 -n2;
let multiply = (n1,n2) => n1*n2;
let divide = (n1,n2) => n1/n2;

// evalution
// ! <- 논리 부정연산자(not) : != <- 비교부정연산자
// !! <- boolean type으로 형변환 하는 형변환 연산자 (숫자1이상은 true , 0은 false)
const isOdd = number => !!(number%2); //홀수인지 양수인지
const isPositive = number => number > 0;

// calcs : 고차함수
// calc , eval : 콜백함수
function calcs( eval,calc ,n1 ,n2){
    return eval(calc(n1,n2));
}

console.log(calcs(isOdd,add,5,7)); // 12는 짝수라 false

console.log(calcs(isOdd,add,5,8)); //13은 홀수라 true

console.log(calcs(isPositive,subtract,5,8)); // -3은 음수라 false

console.log(calcs(isOdd,multiply,5,8)); // 40은 짝수라 false

// 3) return 값으로 함수를 사용할 수 있음

function sayHello(name, flag){
    result = flag ? function(){console.log(`안녕하세우, ${name} 입니다`);} :
                    function(){console.log(`${name}님 안녕히 가세우`);}
    return result;
}
const greeting1 = sayHello('강아지', true);
greeting1();
const greeting2 = sayHello('고양이', false);
greeting2();


add = (n1,n2) => n1+n2;
subtract = (n1,n2) => n1 -n2;
multiply = (n1,n2) => n1*n2;
divide = (n1,n2) => n1/n2;

function test4(funct1, funct2, funct3){
    return (n1,n2) => funct1(funct2(funct3(n1,n2),n2),n2);
}

const add_mul_sub = test4(add,multiply,subtract);
console.log(add_mul_sub(10,8));
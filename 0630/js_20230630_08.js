/**
#   산술 연산자
 */

// 1) 이항(산술)연산자
let num1 = 10;
let num2 = 8;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);   //항상 실수라 1.25가 나옴 자바는 1이지만
console.log(num1 % num2);   
console.log(num1 ** num2); //제곱 10의8승

// 2) 증감/감소 연산자
let count = 1;
console.log(count);
count++;
//자바랑 같다

let count1 = 10;
let count2 = count1++ + 1;
console.log(`count1 : ${count1} , count2 : ${count2}`);

let count3 = 10;
let count4 = ++count3 + 1;
console.log(`count3 : ${count3} , count4 : ${count4}`);

let count5 = 10;
console.log(count5++,count5--,++count5,--count5);
//출력한 후 증가 -> 출력한 후 감소 -> 증가한후 출력 -> 감소한후 출력


//문자열이 자동으로 숫자형으로 형변환됨
console.log(+'100',-'100', +'가나다라')

//숫자형에 사용하는 연산자를 문자열에 사용하면
// 문자열이 자동으로 숫자형으로 변환된다
// '가나다라'는 숫자모양의 문자열이 아니라서 Nan이됨

console.log('------------------------')
let number1 = '100';
console.log(number1++, number1) 
// 100 , 101
number1 ='100';
console.log(--number1, number1)
// 99 99
number1 ='java';
console.log(number1++, number1)
// NaN NaN

// 3) 할당연산자

let number3 = 10;
number3 += 2;
console.log(number3)

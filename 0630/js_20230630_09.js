// 실수연산

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 === 0.3);

// 2의 제곱으로 이루어진 수들은 계산결과가 정확하다
console.log(0.25*0.5)
console.log(0.5+0.25+0.125+0.125)
console.log(0.0625+0.25)

// 그 외는 이런식으로 결과가 정확해지지않음
console.log(0.2*0.7)
console.log(0.4*3)
console.log(0.9-0.6)
console.log(0.9-0.3)


//* 5) boolean type의 연산자

let b1 = 1 === 2;
let b2 = 'abc' !== 'opq';
let b3 = b1 !==b2;
let b4 = typeof b1 === typeof b2 ===true;

console.log('b1 : ',b1,'type :', typeof b1, typeof (typeof b1));
console.log('b2 : ',b2,'type :', typeof b2, typeof (typeof b2));
console.log('b3 : ',b3,'type :', typeof b3, typeof (typeof b3));
console.log('b4 : ',b4,'type :', typeof b4, typeof (typeof b4));

//* 6)and or 논리연산

//    자바와똑같이 && || 을사용한다

// 숫자와 결합하여서도 사용가능
console.log(true && 10 + 5)
console.log(true || 10 + 5)
console.log(false && 10 + 5)
console.log(false || 10 + 5)

//우선순위 산술연산자(%,*,+,-) > 비교연산자 > 논리연산자
let number =13;
console.log( 10 < number && number <= 20 || number % 3 === 0);

// 삼항연산자

let age = 19
console.log( age >= 18 ? '성인' : '어린이')

let number5 = 35
console.log(number5 %2 == 0 ? '짝수': '홀수')

console.log(number5 %2 ? '홀수': '짝수')
// 2로 나눴을때 나머지가있다면 1 이상을 반환하므로 true
// 2로 나눠져 나머지가 0으로 반환하면 false
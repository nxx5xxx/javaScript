
console.log(true,typeof true)
console.log(false,typeof false)

// b1 에 1 === 2 의 결과를 대입
let b1 = 1 ===2;
console.log(b1);
// b1 에 'abc' !== 'ter' 의 결과를 대입
let b2 = 'abc' !== 'ter';
console.log(b2);
// b1 에 b1 !== b2; 의 결과를 대입
let b3 = b1 !== b2;
console.log(b3);


let n1 = 1 , n2 =2 , n3 = 3;
console.log(n1, n2, n3);
// 1 2 3
console.log(++n1, n2 += n1 , n3 *= b2);
// 2 4 3

// ?? : null 병합연산자

let a;
a ?? console.warn(a, 'a에 값이 할당되지 않음')

a = 0
a ?? console.warn(a, 'a에 값이 할당되지 않음')

a= null
a ?? console.warn(a, 'a에 값이 할당되지 않음')

//
let b = false;
let c = 0;
let d = ' ';
let e = null;
let f;
console.log(b,c,d,e,f);

console.log(
    b ?? '기본값',
    c ?? '기본값',
    d ?? '기본값',
    e ?? '기본값',
    f ?? '기본값'
    );

let g = 0;
let h = '';
let i = null;

g ||= 100;
h &&= '있어야 변경됨 ';
i ??= '기본값';
// g = 0 또는 100일경우 출력되는것
// h = ''이고 '있어야 변경됨'이어야 출력되는것
// i = i가 null또는 undefined일경우 '기본값' 으로 i 에 대입
console.log(g,h,i);

/**
 *  연산자 우선순위
 * 단항연산자 > ** > * , / , % > +, - > 비교연산자 , 논리연산자 , 
 * 복합(병합)할당 연산자
 */
// Math Object

//파이값
console.log(Math.PI);

// 절대값
console.log(Math.abs(-234));
console.log(Math.abs(0));
console.log(Math.abs(''));
console.log(Math.abs(null));
console.log(Math.abs([]));
console.log(Math.abs('abc'));
console.log(Math.abs(undefined));
console.log(Math.abs([2,3,4]));
console.log(Math.abs({name : '으액'}));
console.log(Math.abs());


/*
    소수점 자리를
    round() 반올림
    ceil() 올림
    floor() 내림
    trunc() 소수점을 그냥 자름(버림)
*/

console.log(Math.round(123.567));
console.log(Math.ceil(123.567));
console.log(Math.floor(123.567));
console.log(Math.trunc(123.567));

// pow() 제곱

console.log(Math.pow(2,5)); //2에 5승

// sqrt (스퀘어루트) - 루트(=제곱근)
console.log(Math.sqrt(2));
// - , 비어있는값은 NaN으로 나온다

// 최대값 최소값
console.log(Math.max(23,64,56,0,99));
console.log(Math.min(23,64,56,0,99));

// 랜덤값 ( 0<=  <1)
console.log(Math.random());
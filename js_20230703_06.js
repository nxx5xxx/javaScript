// 조건문
// if(조건식 : boolean타입의 값 , boolean식, boolean변수) - 이 3가지를 expression이라 한다

const money = true;

if(money){
    console.log('외식을 할 수 있습니다');
}else{
    console.log('집에서 먹습니다');
}

let number = 10

if(number ==10){
    console.log('number는 10입니다');
}

if(number >=5){
    console.log('number는 5보다 크거나 같습니다');
}

if(number <=20){
    console.log('number는 20보다 작거나 같습니다');
}

if(number ==8){
    console.log('number는 8입니다');
}

if(number <=100){
    console.log('number는 100보다 작거나 같습니다');
}
console.log('-----------------------');

if(number ==10){
    console.log('number는 10입니다');
}else if(number >=5){
    console.log('number는 5보다 크거나 같습니다');
}else if(number <=20){
    console.log('number는 20보다 작거나 같습니다');
}else if(number ==8){
    console.log('number는 8입니다');
}else if(number <=100){
    console.log('number는 100보다 작거나 같습니다');
}else{
    console.log('위의 내용은 모두 거짓입니다');
}

id = 'test01'
pw = 1234

if(id == 'test01' && pw == 1234){
    console.log("로그인 되었습니다");
}

let flag1 = id == 'test01'
let flag2 = flag1 && pw == 1234

if(flag2){
    console.log("로그인 되었습니다");
}
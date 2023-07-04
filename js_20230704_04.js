//자바와는 다르게 매개변수의 갯수가 맞지않아도 오류가 나지않으며
//초과하는 아규먼트는 그냥 무시당한다

function add(n1, n2){
    return n1 + n2;
}

console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
//argument 개수가 parameter개수보다 적으면
// 에러는 발생하지않고 NaN을 반환한다 
console.log(add()); //NaN
console.log(add(30)); //NaN
console.log(add(50,60));

// default parameter
// argument개수가 parameter 개수보다 적은경우
// default parameter를 지정하면 지정된 값이 사용된다

function add2(n1 =10, n2=20){
    console.log(`${n1} - ${n2}`);
    return n1 + n2;
}

console.log(add2());
console.log(add2(30));
console.log(add2(50,60));

console.log("-------------------------");

//arguments 라는 속성 이용
function add3(n1,n2){
    console.log('arguments : ', arguments);
    console.log('arguments[0] : ', arguments[0]);
    console.log('typeof arguments : ', typeof arguments);
    return n1 + n2;
}
console.log(add3(1,3,5,7));

console.log("-------------------------");

function add4(n1,n2){
    for(const arg of arguments){
        console.log(arg);
    }
    return n1 + n2 ;
}

console.log(add4(1,3,5,7));

console.log("-------------------------");

function avg(){
    let result = 0;
    let count = 0;
    for(const n1 of arguments){
        if(typeof n1 !== 'number') continue;
        result += n1;
        count++;
    }
    return result / count;
}

console.log(avg(2,3,'강아지',4,5,6,false,7,8));

function avg2(){
    let result = 0;
    for(const n1 of arguments){
        if(typeof n1 !== 'number') continue;
        result += n1;
    }
    return result / arguments.length;
}

console.log(avg2(2,3,'강아지',4,5,6,false,7,8));
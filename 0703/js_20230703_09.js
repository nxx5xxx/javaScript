// while / do-while

for(let i=1;i<=10;i++){
    break;//지저분해서 넣음
    console.log(i);
}
let i=1;
while(i<=10){
    break;//출력값 지저분해서 넣음
    console.log(i);
    i++;
}

//Math.random()


// 0<= x < 1
console.log(Math.random());
// 1<= x < 10
console.log(parseInt(Math.random()+1)*10);
// 1<= x <= 10
console.log(parseInt(Math.random()*10)+1);

let com = parseInt(Math.random()*100)+1;
let user = 90;

if(user>=com){
    console.log('더 작은 수 를 입력하세요');
}else if(user <= com){
    console.log(' 더 큰 수를 입력하세요');
}else{
    console.log('정답입니다');
}

//floor라는 내림 함수도있다 사용법은 Math.floor(Math.random()*100)+1 이런식

console.log(Math.floor(Math.random()*100)+1);


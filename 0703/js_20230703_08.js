// 반복문

let sum = 0;
let i = 0;
for(i = 1; i<=10;i++){
    sum+=i;
}
//i는 for문이 끝날때 의 값이 아니라
// for문이 false가 될때 끝나므로 i가 11이 되어서 더이상 for문이 반복되지 않을때의 값
console.log(`1부터 ${i-1} 까지의 합은  ${sum} 입니다`);

//여기서 a= !a 는 a가 true였다가 false였다가 반복
for(let a = true, b=0,c=0;
    b*c <10; a = !a, a? b++:c++){

        console.log(b,'-',c);
    }


/*
    무한루프
    for(;;){
        명령문
    }
*/


//향상된 포문을 사용하여 key와 value 뽑아내기
// let써도된다
const food = {
    name : "햄버거",
    taste : "불고기",
    calories : 500,
    warm : true
}

//같은 in을 써도
//객체에서 key와 value를 꺼낸다
for(const key in food){
    console.log(`${key}: ${food[key]}`);
}

//배열에서 index번호를 꺼낸다
const arr1 = [100,'abc',true, null];
for(const item in  arr1){
    console.log(item)
}
console.log("-------------------")
//배열에서
//item(element)을 꺼낸 : of
for(const element of arr1){
    console.log(element)
}

for(const char of '스프링웹개발'){
    console.log(char);
}

///
const numbers3 =  [1,2,3,4,5,6,7,8,9,10];
const numbers4 = []
for(let number of numbers3){
    number++;
    numbers4.push(number + 1);
}
console.log('number3 : \n',numbers3);
console.log('number4 : \n',numbers4);

//레이블 outer
outer:
for(let dan=1; dan<10;dan++){
    for(let number =2; number<10;number++){
        if(dan ==4 )break outer;
        console.log(`${dan} X ${number} = ${dan*number}`);
    }
    console.log();
}


// 
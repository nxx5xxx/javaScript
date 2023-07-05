// scope : 변수의 인측범위

{
    //지역변수
    const num1 = 200;
    let name1 = '강아지';
    console.log(num1,name1);
}
//지역변수에서 선언한거라 불러오지 못한다
//console.log(num1,name1);

// for문

let sum =0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);
console.log(`${sum}`,sum);


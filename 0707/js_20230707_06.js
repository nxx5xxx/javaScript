//맵함수를 이용한 복사
// map() 함수
let arr1 = [11,22,33,44,55];

// 레거시포문
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

// for in 
for(let idx in arr1){
    console.log(arr1[idx]);
}

// for of
for(let item of arr1){
    console.log(item);
}

console.log('--------------------------')
// 배열의 메소드 map()
// 아이템과 인덱스 두개다 꺼내오는것이 맵
// for in과 for of를 합친것이라 생각하면된다
arr1.map(function(item, index){
    console.log(`${index+1} 번째 : ${item}`);
});
console.log('------------------');

arr1.map((item,index)=>{
    console.log(`${index+1} 번째 : ${item}`);
});
console.log('------------------');

arr1.map((item,index)=>console.log(`${index+1} 번째 : ${item}`));

console.log('------------------');
//배열의복사 - 얘도 1차원복사임

arr2 = arr1.map(item => item);
console.log('------------------');
console.log('arr1 : ',arr1);
console.log('arr1 : ',arr2);

arr1[2] = 333;
console.log('arr1 : ',arr1);
console.log('arr1 : ',arr2);


console.log('------------------');
//깊은복사 JSON 객체인 parse머시기를 사용

const arr3 = [[1,2,3],[4,5,6]];
const arr4 = JSON.parse(JSON.stringify(arr3));
console.log(arr3);
console.log(arr4);
arr3[0][2] = 222;
console.log(arr3);
console.log(arr4);


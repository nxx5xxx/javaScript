/*
JSON : Java Script Object Notation - 자바스크립트 객체 표기법
JSON 객체의 stringify : 객체를 문자열로 직렬화함 ( serialize )
*/

const student = {
    name1 : '강아지',
    age : 21,
    language : ['korean', 'English', 'Deutch'],
    university : {
        shcool : '서울대',
        major : ['인공지능' , '마케팅'],
        gradurated : true
    }
}

console.log(student);

console.log('-----------------------');

//직렬화는 옆으로 쭉 나열하여 문자열로 만든것
//즉 키와 밸류가 사라짐
// 같은 데이터일경우 json이 데이터가 더 작음
// 단순데이터일경우 json으로 보내는편이 나음
console.log(JSON.stringify(student));
console.log(typeof JSON.stringify(student));

//forEach문으로 배열출력
[
    JSON.stringify(1),
    JSON.stringify(Infinity),
    JSON.stringify(NaN),
    JSON.stringify('강아지'),
    JSON.stringify(true),
    JSON.stringify(null),
    JSON.stringify(undefined),
    JSON.stringify([11,22,33]),
    JSON.stringify({a:1,b:2}),
    JSON.stringify(new Date())
].forEach(i=>console.log(i))

//배열에 이름을 붙이지않아도 뽑아낼수있다 
console.log('-----------------------');
//아래것과 같은내용임(arr1을 붙인것 말고)
const arr1 = [
    JSON.stringify(1),
    JSON.stringify(Infinity),
    JSON.stringify(NaN),
    JSON.stringify('강아지'),
    JSON.stringify(true),
    JSON.stringify(null),
    JSON.stringify(undefined),
    JSON.stringify([11,22,33]),
    JSON.stringify({a:1,b:2}),
    JSON.stringify(new Date())
];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log('-----------------------');
//이렇게도 가능
arr1.forEach(item=>console.log(item));

console.log('-----------------------');
const arr2 = [
    typeof JSON.stringify(1),
    typeof JSON.stringify(Infinity),
    typeof JSON.stringify(NaN),
    typeof JSON.stringify('강아지'),
    typeof JSON.stringify(true),
    typeof JSON.stringify(null),
    typeof JSON.stringify(undefined),
    typeof JSON.stringify([11,22,33]),
    typeof JSON.stringify({a:1,b:2}),
    typeof JSON.stringify(new Date())
];
arr2.forEach(item=>console.log(item));
// 배열
const arrNumbers = [34, 653, 3, 81]
const arrWeekdays = ['월','화','수','목','금','토','일'];

const arr1 = ['강아지' , 3 , 185 , 75];
// 객체는 key와 value (hashmap과 비슷하다 보면된다)
const obj = {이름 : '고양이', 나이 : 21 , 키 : 178, 몸무게 : 65}

console.log('배열 길이',arrNumbers.length);
console.log(arrNumbers[0]);
console.log(arrNumbers[1]);
console.log(arrNumbers[2]);
console.log(arrNumbers[3]);

console.log('배열 길이',arrWeekdays.length);
console.log(arrWeekdays[0]);
console.log(arrWeekdays[1]);
console.log(arrWeekdays[2]);
console.log(arrWeekdays[3]);
console.log(arrWeekdays[4]);
console.log(arrWeekdays[5]);
console.log(arrWeekdays[6]);

console.log('객체 길이',arr1.length);

//arr1의경우 key값을 해줘야해서 length-1을 못한다
console.log(arrWeekdays[arrWeekdays.length-1], arrNumbers[arrNumbers.length-1]);

//객체 안에 객체 , 배열을 만들수도 있다
const student2 = {
    name : '학교',
    age : 21,
    language : ['Korean','English','Deutch'],
    education : {
        university : '서울대학교',
        major : ['컴퓨터공학','인공지능'],
        graduated : true
    }
}

console.log(student2.language);
console.log(student2.language[0]);
console.log(student2.education);
console.log(student2.education.major);

//2차원배열
const numbers = [[1,2],[3,4,5],[6,7,8,9]];

//배열 안에 객체도 넣을 수 있다
const languages = [
    {name : '학교1' , language: '한국어'},
    {name : '학교2' , language: '영어'},
    {name : '학교3' , language: '독일어'}
]

console.log(languages[1].language);



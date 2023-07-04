// 객체의 key 삭제하기 : delete연산자

const student = {
    name : "강아지",
    age : 32,
    school : '서울대학교',
    major : '인공지능학과'
}

console.log(student);
//{ name: '강아지', age: 32, school: '서울대학교', major: '인공지능학과' }
delete student.age;
console.log(student);
//{ name: '강아지', school: '서울대학교', major: '인공지능학과' }

// 없는 속성 삭제하기
// 오류가 발생하지는 않음
delete student.hobby;
console.log(student);

console.log('--------------------');

// 함수를 이용하여 키의 값 바꾸기
const stationery = {
    name : '공책',
    color : 'blue',
    price : 5000
}

function modifyProperty(obj, key, value){
    obj[key] = value;
}
console.log('값 바꾸기 전',stationery);
modifyProperty(stationery, 'color', 'red'); //키를 지정할때는 문자열로 지정하여야한다
console.log('값 바꾼 후 ',stationery);

function deleteProperty(obj, key){
    delete obj[key];
}
stationery.stock = 100;
console.log('stock이란 property 추가',stationery);
deleteProperty(stationery,'stock');
console.log('stock이란 property 삭제',stationery);


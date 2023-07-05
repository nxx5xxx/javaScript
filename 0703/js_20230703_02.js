/*
    JSON : JavaScript Object Notation
    {k:v1, k2:v2 , k3:v3, ...}
    
*/


//자바의 경우 이렇게 객체를 만드는것을
/*
class Student1{
    String name = "강아지";
    int age = 5;
    int grade = 6;
}
*/
// 자바스크립트의경우 아래처럼 객체를 생성할 수 있다 (클래스와는 약간다르다)
const student1 = {name : '강아지' , age : 5 , grade : 6};

console.log(typeof student1);
console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.grade);
console.log(student1['name']);
console.log(student1['age']);
console.log(student1['grade']);

//값을 설정해주지 않은경우
console.log(student1.height);
console.log(student1['height']);
// undefined로 나옴

//속성이 (멤버필드 ) 객체 안에 포함되는지 확인하는법 : in 연산자
console.log('name' in student1);
console.log('adress' in student1);

// 속성 값 바꾸기는 이렇게 쉽게 바꿀수 있다
student1.age += 1;
console.log('student1.age : ' ,student1.age);

//파이썬이나 자바스크립트는 객체에 속성을 추가할수있다
// 없는 속성(property) 추가하기
student1.height = 185;
console.log(student1); // 결과값 { name: '강아지', age: 6, grade: 6, height: 185 }
student1['weight'] = 75;
console.log(student1);
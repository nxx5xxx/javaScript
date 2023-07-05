const fruit1 = {
    name : "사과",
    price : "2000",
    stock : false
}

console.log(fruit1);
console.log(fruit1['name'],fruit1['price'], fruit1.stock);

// 비어있는 객체 생성 후, 속성(property - (자바로따지면 클래스에 멤버변수추가기(자바불가))추가하기)
const fruit2 = {};

// 없는 속성(property(key))에 값(value) 을 할당하면 추가됨
fruit2['name'] = "포도";
fruit2.price = 3500;
fruit2['stock'] = true;

console.log(fruit2);

//이미 있는 속성에 값을 할당하면 값이 수정된다
fruit2['price'] = 50000;
console.log(fruit2);


let obj1 = {
    1 : "one",
    "title" : "restaurant",
    'user-name' : '강아지',
    'a d d r e s s' : '고양시'
}

console.log(obj1);
console.log(obj1[1]);
console.log(obj1.title);
console.log(obj1["user-name"]);
console.log(obj1["a d d r e s s"]);
//객체 프로퍼티(key) 에 - , 띄어쓰기 , 숫자 등등으로 지정되면 
// .프로퍼티명 이 아닌 ["~"],['~'] 으로 불러야한다
// 이것은 명명규칙으로서 정해져있는 규칙이다
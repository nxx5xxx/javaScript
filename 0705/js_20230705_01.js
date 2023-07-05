/*
생성자 메소드 : constructor method
1) instance 생성할 때 parameter에 argument를 전달받아
    property(속성- 멤버변수)를 초기화한다
2) 클래스에 하나만 작성할 수 있다
3) constructor라는 이름이 정해져있다
4) 기본값 사용이 가능하다
5) 객체 생성할 때 전달할 argument 가 없으면
    parameter를 생략하는데...
    <-- 생성자 메소드를 작성하지 않아도 자동으로 동작한다
        (Java에서 기본 생성자를 작성하지 않아도 자동으로 동작하는것과 비슷)
6) return 값을 사용하지 않는다 : 생성자 함수와 같이 this를 반환한다
                                        [묵시적으로 반환한다]
*/
//생성자 메소드
class Student{
    constructor (name,age,pass=true){
        this.name = name;
        this.age = age;
        this.page = pass;
    }
}

const s1 = new Student('강아지',23,false);
const s2 = new Student('고양이',27); // 디폴트 true를 지정했기때문에 생략시 true로 된다
console.log(s1);
console.log(s2);

class Bird{
    chirp(){
        return '짹짹';

    }
}

const b1 = new Bird();
console.log(b1.chirp());

//생성자 함수

function Bird2(){
    this.chirp = function chirp(){
        return '짹짹';
    }
}

const b2 = new Bird2();
console.log(b2.chirp());

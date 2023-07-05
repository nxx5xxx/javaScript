/*
    캡슐화 : encapsulation
    객체(클래스) 내부의 값을 외부에서 접근하지 못하게 하는것
    자바스크립트 에서는 기본적으로 접근 설정이 public으로 되어있다
    그것을 private로 바꾸는것은 멤버변수 앞에 #를 붙여주면 된다
*/

class Person{
    #name = '';
    #age = 10;
    constructor(name,age){
        this.#name =name;
        this.#age = age;
    }
}

const p1 = new Person('강아지',21);
console.log(p1);
/*

#을 사용하면 private 으로 되어서
해당클래스를 외부에서는 접근할 수 없다
console.log(p1.#name);
console.log(p1.#age);
console.log(p1['#name']);
console.log(p1['#age']);

*/

class Person2{
    #name = '';
    #age = 10;
    constructor(name,age){
        this.#name =name;
        this.#age = age;
    }
    get name(){
        return this.#name + '님';
    }
    get age(){
        return this.#age - this.#age%10 ;
    }
    set age(age){
        //age가 숫자 type이면서 0보다 큰경우
        if(typeof age === 'number' && age > 0){
            this.#age = age;
        }else{
            console.log('0이상의 정수를 입력해주시기 바랍니다');
        }
    }

    getAgeAfter(afterYear){
        return this.#age + afterYear;
    }
    set name(x){
        this.#name = x;
    }
}
const p2 = new Person2('고양이',55);
//게터로 호출 ( get name )
console.log(p2.name);
//세터로 접근
p2.name = '강아지';
//새로운멤버필드 추가
p2.name2 = '강아지2';
console.log(p2.name);
console.log(p2);
p2.age = '뻐큐';
console.log(p2.age);
p2.age = 23;
console.log(p2.age);
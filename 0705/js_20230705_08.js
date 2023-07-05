/*
    상속 : inheritance <-- extends(extension) [확장] - 확장(덧붙이는것)이라 생각하면 편함
    
    parent class - child class
    super class - sub class
    base class - derived(파생=확장) class
*/

class Animal{
    constructor(name){
        this.name = name;
    }
    sound(){
        if(this.name !=undefined ){
        console.log(`${this.name} 동물이 소리를 냅니다`);
        }else{
            console.log(`동물이 소리를 냅니다`);
        }
    }
}
//생성자는 한개만가능
class Dog extends Animal{
    //Dog는 기본베이스로해서 Animal이라는 클래스의 기능을 추가한다
    //이런식으로 해석하면 편하다
    run(){
        console.log(`${this.name} 이(가) 몸통박치기!`);
    }
}


class Cat extends Animal{
    jump(){//펑션의바디 메소드의바디 -- 구현부
        console.log(`${this.name} 이(가) 튀어오릅니다!`);
    }
}

const a1 = new Animal();
a1.sound();
console.log(`---------------------`);
const d1 = new Dog('뿔충이');
d1.run();
d1.sound();
console.log(`---------------------`);
const c1 = new Cat('잉어킹');
c1.jump();
c1.sound();


console.log(`---------------------`);


class Dog2 extends Animal{
    //상속받은 메소드를 변경하는것을 오버라이딩이캄
    //선언부는 똑같아야함 - sound()가 선언부가됨
    sound(){ //오버라이딩
        console.log(`${this.name} 동물이 소리를 냅니다 - 시발`);
    }
    run(){
        console.log(`${this.name} 이(가) 몸통박치기!`);
    }
}

const d2 = new Dog2('강아지');
d2.run();
d2.sound();
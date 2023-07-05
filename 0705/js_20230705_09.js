/*
    super keyword
      ㄴ 자식 클래스에서 부모클래스를 가리키는 keyword
*/
class Restaurant{
    number = 0;
    menu = {'떡볶이' : 5000, '쫄면' : 6000};
    constructor(name, number){
        this.name =name;
        if(number) { this.number = number; }
    }
    greeeting(){
        return `안녕하세요, ${this.name} ${this.number} 호점입니다
메뉴는 ${Object.keys(this.menu)} 입니다`;
    }
    menuPrice(menuName){
        return `${menuName} 은(는) ${this.menu[menuName]} 원입니다`
    }
}

class ChildRestaurant extends Restaurant{
    #taste = '';
    //생성자에서 멤버변수 초기화할때 부모에있는 값을 받아와야하는데
    constructor(name,number,taste){
        // this.name = name;
        // this.number = number;
        // 부모에서 했기때문에 안해도된다
        // 아래 코드는 부모 생성자에 name과 number를 집어넣어주는것
        super(name,number);
        this.#taste = taste;
    }
    greetingWithTaste(){
        return super.greeeting() + `: ${this.#taste} `
    }
    //오버라이딩
    menuPrice(menuName){
        return super.menuPrice(menuName) +  `: ${this.#taste} `
    }
}

const cr2 = new ChildRestaurant('맛잇는분식', 5,'매운맛');
console.log(cr2);
console.log(cr2.greetingWithTaste());
console.log(cr2.menuPrice('떡볶이'));


console.log('---------------');
// static 메소드를 상속받아 overriding하기
class Car{
    static name1 = '소나타';
    static display(){
        console.log(`이 차는 ${this.name1} 입니다`);
    }
}

//자바에서는 static이 상속이 안되지만 스크립트에서는 가능하다
class ChildCar extends Car{
    //상속받아서 오버라이딩
    static display(){
        super.display();
        console.log('이 차는 성능이 조수미다');
    }
}

ChildCar.display();
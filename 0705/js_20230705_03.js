scores = {'강아지' : 90, '고양이' : 75, '아카데미': 60}

//객체 리터럴에서 key만 갖고오기
console.log(Object.keys(scores));

// 객체 리터럴에서 value만 갖고오기
console.log(Object.values(scores));

class Restaurant{
    number = 0;
    menu = {'떡볶이' : 5000, '쫄면' : 6000};

    //자바스크립트는 생성시에 속성 추가가가능하다
    //자바에서는 멤버필드에없는거 지정불가함
    constructor(name, number){
        this.name =name;
        if(number) { this.number = number; }
    }

    greeeting(){
        return `안녕하세요, ${this.name} ${this.number} 호점입니다
메뉴는 ${Object.keys(this.menu)} 입니다`;
    }

    order(menuName){
        return `${this.menu[menuName]}`;
    }
    menuPrice(menuName){
        return `${menuName} 은(는) ${this.menu[menuName]} 원입니다`
    }
}
//메뉴소개
const r1 = new Restaurant('맛조은분식', 1);
console.log(r1.greeeting());
//주문
console.log(r1.menuPrice('떡볶이'));
console.log(r1.menuPrice('쫄면'));

//상점추가
const r2 = new Restaurant('더맛조은분식', 1);
//메뉴추가 // 자바와는 다르게 처음에 정해지지않은 멤버필드를 추가가 가능하다
r1.menu['김밥'] = 7000;
console.log(r1);
console.log(r2);


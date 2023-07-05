// 스태틱

class Card{
    //static property : 해당 class의 모든 객체에 공통적(값이 같은) property
    static width = 100;
    static height = 250;

    //스태틱 메소드 : instance들이 공유하는 공통된 method
    static introduce(){
        return `이 객체는 Card객체입니다.
Card의 너비는 ${this.width}이고, 높이는 ${this.height} 입니다`
    }

    //생성자
    constructor(shape, number){
        //객체 속성
        //instance property : 각 instance 마다 다른값을 갖는 property
        this.shape = shape;
        this.number = number;
    }

    // instance method : static을 붙이지 않는다
    // instance 별로 실행되는 method
    greeting(){
        return `이 Card는 ${this.shape} - ${this.number} Card 입니다`;
    }
}

console.log('typeof Card : ', typeof Card);
console.log(Card.introduce());

const c1 =new Card('heart',5);
const c2 =new Card('spade',3);
const c3 =new Card('clover',9);
const c4 =new Card('diamond',2);

console.log('---c1---');
console.log(c1);
console.log(`카드폭 : ${Card.width} , 카드 높이 : ${Card.height}`)
console.log(`c1.shape : ${c1.shape} , c1.number : ${c1.number}`)
console.log('---c2---');
console.log(c2);
console.log(`카드폭 : ${Card.width} , 카드 높이 : ${Card.height}`)
console.log(`c2.shape : ${c2.shape} , c2.number : ${c2.number}`)
console.log('---c3---');
console.log(c3);
console.log(`카드폭 : ${Card.width} , 카드 높이 : ${Card.height}`)
console.log(`c3.shape : ${c3.shape} , c3.number : ${c3.number}`)
console.log('---c4---');
console.log(c4);
console.log(`카드폭 : ${Card.width} , 카드 높이 : ${Card.height}`)
console.log(`c4.shape : ${c4.shape} , c4.number : ${c4.number}`)


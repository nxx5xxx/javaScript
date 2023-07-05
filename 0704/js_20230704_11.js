/*
    생성자 함수
*/

const student1 = {
    name : '강아지',
    stdno : 2301,
    sayHello(){
        return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
    }
}

const student2 = {
    name : '고양이',
    stdno : 2302,
    sayHello(){
        return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
    }
}

const student3 = {
    name : '고라니',
    stdno : 2303,
    sayHello(){
        return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
    }
}

const student4 = {
    name : '강아지',
    stdno : 2304,
    sayHello(){
        return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
    }
}

// 생성자 함수로 객체 생성하기
//자바로따지면 파라메터가 있는 생성자
// 자바에서 생성자는 클래스이름과 똑같은메소드
function Professor(profName, profNo){
    this.profName = profName;
    this.profNo = profNo;
    this.sayHello = function(){
        return `안녕하세요 ${this.profName} 교수입니다. 교수번호는 ${this.profNo} 입니다`
    }
}

const prof1 = new Professor('잉어킹',2305);
const prof2 = new Professor('피존투',2306);
const prof3 = new Professor('또가스',2307);

//자바에서는 Professor prof1 = new Professor(~~~);

//오버라이딩이 자동으로 된다고 보면된다 
console.log(prof1.sayHello());
console.log(prof2, prof2.sayHello());
console.log(prof3, prof3.sayHello());


//이런식으로도 생성가능하다
console.log(new Professor('뉴',2307));
//이런식으로도 할경우엔 메모리에 올라가지않아 undefined가 나온다
console.log(Professor('노뉴',2307));
//객체를 메모리에 올린다는것은 멤버필드를 올리는것
//new 연산자를 통해 메모리의 확보를 하는것인데
//new를 통하지않으면 메모리의 확보를하지못해 메모리에 올리질못한다
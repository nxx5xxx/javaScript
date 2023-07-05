// 속성(property = field(필드) = 멤버변수)
//속성과 기능을 합친것이 클래스
// 속성 이름과 getter, setter의 이름이 같은경우
/*
class Student3{
    constructor(name,number){
        this.name = name;
        this.number = number;
    }
    get number(){
        return this.number + '번 학생';
    }

    set number(number){
        this.number = number;
        //매개변수와 호출이름이 같기때문에
        //자기자신을 자기가 계속 호출하는 재귀호출이 된다
        //그때문에 콜스택이 꽉찻다는 에러가 나는것 
        // RangeError: Maximum call stack size exceeded
        //재귀호출 - 자기가 자기를 호출하는경우
    }
}
*/

class Student4{
    constructor(name,number){
        this.name = name;
        // 속성 nunmber가 생성(추가) 되는것이 아니고
        // setter number를 호출하는 code
        this.number = number;
    }
    get number(){
        return this.studentNumber + '번 학생';
    }

    set number(number){
        // 전달받은 파라미터 (number) 값으로 초기화된
        // studentNumber 라는 속성이 생성됨
        this.studentNumber = number;
    }
}


const s1 = new Student4('강아지',100);
console.log(s1);
console.log(s1.name);
console.log(s1.number);
console.log(s1.studentNumber);


class Student5{
    constructor(name,number){
        this.name = name;
        // 위와 다르게 멤버변수로 만들어짐
        this.number = number;
    }
    get stdNumber(){
        return this.number + '번 학생';
    }

    set stdNumber(number){
        this.number = number;
    }
}

const s2 = new Student5('고양이',300);
console.log(s2);
console.log(s2.name);
console.log(s2.number);
console.log(s2.stdNumber);
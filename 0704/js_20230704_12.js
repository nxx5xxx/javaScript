// 객체를 반환하는 함수

function constructProfessor(profName, profNo){
    return {
        //profName : profName 이여서 생략
        profName,
        profNo,
        sayHello(){
            return `안녕하세요 ${this.profName} 교수입니다. 교수번호는 ${this.profNo} 입니다`;
        }
    }
}

const prof1 = constructProfessor('이순신',202301);
const prof2 = constructProfessor('이황',202302);
const prof3 = constructProfessor('세종대왕',202303);

console.log(prof1, prof1.sayHello());

/*
    생성자 함수 이름은 첫글자를 대문자로 시작한다
    생성자 함수로 생성된 객체(object)를 instance 라고 한다
    this. 키워드를 사용해서 property(속성) 를 정의한다
    생성자 함수를 호출할때는 항상 new 연산자를 먼저 작성한다
    생성자 함수는 this  반환한다
                    ㄴ 생성된 객체의 주소를 저장하고 있는 참조변수
    생성자 함수에서는 method 를 정의할 수 없다
                        ㄴ{}사용해서 생성하는 객체 : 객체 리터럴,
                        클래스에서는 method를 정의할 수 있다.
    !어떤클래스인지 특정지어서 (person)클래스로부터 생성되어진 객체 instance
     일반적으로 말할땐 오브젝트
 */


function Professor(profName, profNo){
    this.profName = profName;
    this.profNo = profNo;
    this.sayHello = function(){
        return `안녕하세요 ${this.profName} 교수입니다. 교수번호는 ${this.profNo} 입니다`
    }
}
const prof = new Professor('잉어킹',2305);
console.log(prof.sayHello());
/*
    이걸 자바로한다면
class Professor{
    String profName;
    int profNo;
    public Professor(profName,profNo){
        this.profName = profName;
        this.profNo = profNo;
        this.sayHello();
    }
    public static String sayHello(){
        return "안녕하세요" + this.profName + "교수입니다. 교수번호는" + this.profNo +"입니다";
    }
}

Professor prof1 = new Professor("잉어킹",2305);
*/
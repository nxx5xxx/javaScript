/*
    getter, setter
*/

const student1 = {
    _name : '강아지',
    _age : 21,

    //자바에서는 getName(~)
    get agePlusOne(){
        //갖고오는거니까 반환값이 있음
        return this._age + 1;
    }, //객체 리터럴로할때는 반점을 찍어줘야한다
        //리터럴이란 데이터 (값) 을 의미한다 즉 게터와 세터도 하나의 값 으로 인식
    set ageMinusNumber(number){
        //고치는거니까 반환값없이 안의 속성을 건드림
        this._age = this._age - number;
    }
}

console.log(student1);
//자바와는 다르게 ()를 넣지않는다
//리터럴이기때문에 ()를 넣지않는것
console.log(student1.agePlusOne);

//타입을 확인해보면 리터럴이기때문에 number로 나오는것을 알 수 있다
console.log(typeof student1.agePlusOne);

//세터는 이런식으로 사용이 가능하다
student1.ageMinusNumber = 10;
console.log(student1.agePlusOne);

console.log('--------------------------');
const student2 = {
    _name : '',

    get names(){
        return this._name;
    },
    set names(value){
        
        if(value.length < 3){
            console.log("이름은 3글자 이상 입력해주세요");
            return;
        }
        this._name = value;
    }
};

student2.names = '학원';
student2.names = '강아지';
console.log(student2.names);



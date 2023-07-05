/*
    전역객체 : global object 
*/

//global scope

class Person{
    //class scope
}

function test1(){
    // function scope
}

console.log('this : ', this);

/*
console.log(this === window);
브라우저 콘솔창에서만 가능 window가 브라우저 창이라
같은것으로
console.log(self === window);
console.log(self === frames);
console.log(this === frames);
네개다 트루

console.log(this); 만 칠 시
Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
이렇게 나온다
웹프로그래밍할때 쓸수있는 소스들
*/

console.log(global);

console.log('----------위아래 같은것-------globalThis는 브라우저콘솔창에서도 가능');

console.log(globalThis);


console.log('--------------------------------');
///스코프설명

let number = 10;

function test1(number){
    number = 50;
    console.log('number in test1 : ', number);
}

test1(2222);

// 글로벌 스코프에있는 number는보지만
// 함수스코프 안에있는 number는 보지못한다
// 밖에서 안에걸 못본다 생각하면됨
console.log('number : ', number);
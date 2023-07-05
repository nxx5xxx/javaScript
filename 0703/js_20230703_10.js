/*
    함수 - 코드의 재사용을 위해 ( 효율적으로 사용 )

    함수정의부
    ↓
    function 함수이름([parameter : input]){ 함수선언부
        statement(명령문); 함수body(구현부,몸통)
        return 값;
    }

    함수 호출부
    함수이름(argument)
                ㄴ parameter의 개수에 맞는 값

    프로그램에서의 함수 : input(parameter) / output(return 값)
    1) input(O) - output(O)
    1) input(O) - output(X)
    1) input(X) - output(O)
    1) input(X) - output(X)
*/

function test1(){
    console.log("test1");
}

console.log("test1() : ",test1());

//변수나 상수는 먼저 만들고 호출해야하는데
// 함수는 먼저 호출해도된다
//이것을 끌어올린다고 호이스팅이라 한다 
console.log("test2() : ",test2());

function test2(){
    console.log("test2");
    return 200;
}



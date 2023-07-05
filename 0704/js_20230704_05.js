
let add = (n1,n2) => n1+n2;
let subtract = (n1,n2) => n1 -n2;
let multiply = (n1,n2) => n1*n2;
let divide = (n1,n2) => n1/n2;

// 함수의 타입 확인하기 -- 함수는 function 으로반환
console.log(typeof divide); 


function mutliCalc(){
    console.log('arguments : ', arguments);

    //funct1은 내부함수
    let funct1 = (n1,n2) => {
        let result = n1;
        for(const argument of arguments){
            // arguments에 있는 요소가 함수인지 확인하기
            if(typeof argument != 'function')continue;
            result  = argument(result,n2);
        }
        return result;
    }
    return funct1;
}

//함수 속에서 add , multi사용하고싶다 나는
const add_multi = mutliCalc(add,multiply,1,true);

//내부함수 호출하는 코드 
console.log(add_multi(8,3)); // 함수일경우 그것을 실행하며 (result(=n1)+n2)*3 (8+3 )*3
////////// 내부함수 좀 쉽게
/*
    Closure:
    내부함수에서 외부함수의 지역변수를 사용하는 경우에는
    외부함수가 return해서 종료되더라도
    내부함수의 실행을 위해 이 지역변수들을
    메모리에 보관해야한다 : 이 메모리 영역을 Closure라고 한다
*/


function outer(){
    let num1 = 10;
    let num2 = 20;
    let num3 = 30;
    function inner(num1,num2){
        let num4 = 2;
        return num1 + num2 - num4;
    }
    return inner;
}

//이런식으로 return받은 inner함수에 값을 전달할 수 있다
// 외부함수의 return값(내부함수) 을 변수에 할당하지않고 내부함수를 '직접'호출
console.log(outer()(40,50));
/*
    리턴을 하게되면 그 전의 메모리에서 지우지만
    내부의 값이 필요한경우엔 메모리에서 지우지않고 보관한다
    단, 내부함수에서 사용하는값만 남긴다
    여기서는 num1, num2의 값을 남기는것
    이때 사용되는 메모리의 영역을 closer라고 한다
*/

//외부함수의 reutrn값(내부함수)을 변수에 할당해서 내부함수를 호출함
let funct1 = outer();
funct1(40,50);
console.log('funct1(40,50) : ' ,funct1(40,50))
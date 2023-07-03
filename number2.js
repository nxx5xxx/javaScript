
let count=0;
//1부터 100까지(포함) 의 임의의정수 발생하기
let com = parseInt(Math.random()*100+1);

//여기서 document는 body를 의미함
//document.querySelector(아이디나 클래스를 지정가능)
document.querySelector("#num").onkeypress = function(e){//e는 이벤트의 약자
    if(e.keyCode == 13){//여기서 13은 엔터를뜻한다
        //Key code reference Table을 구글링하면 keycode에대해 자세히 알수있다
        numberCheck(); //numberCheck함수를 실행함
        return false;
    }
}

function numberCheck(){
    let user = document.querySelector("#num").value;
    if(1 <= user && user <= 100){
        if(user>com){
            document.querySelector("#display").innerHTML = '더 작은 수를 입력하세요';
        }else if(user<com){
            document.querySelector("#display").innerHTML = '더 큰 수를 입력하세요';
        }else{
            document.querySelector("#display").innerHTML = '<span style="color:red">정답입니다</span>';
            document.querySelector("#counter").innerHTML = `${count} 번 만 에 맞히셧습니다`;
        }
        document.querySelector("#num").value = "";
        count ++;
        
    }else{
        alert("1이상 100 이하의 자연수를 입력해주세요");
        
    }
}

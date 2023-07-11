
// 텍스트 작성 및 삭제 함수에 쓰려고만듬
const spanEL = document.querySelector("main h2 span");
const txtArr = ['SpringFramwork Developer', 'Server-End Developer', 'Java-Based Web Developer', 'Data Analyst', 'Big-Data Developer'];
let index = 0;
let currentTxt = txtArr[index].split("");
// 텍스트 작성 및 삭제 함수 : 즉시 실행
(function(){
    function writeTxt(){
        spanEL.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }else{
            currentTxt = spanEL.textContent.split("");
            setTimeout(deleteTxt,3000);
        }
    }

    function deleteTxt(){
        currentTxt.pop();
        spanEL.textContent = currentTxt.join("");
        if(currentTxt.length !== 0 ){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }


writeTxt();
})();

// 상하 스크롤 발생 시 header 태그에 active클래스 추가(삭제)
const headerEl = document.querySelector("header");
window.addEventListener("scroll",function(){
    //scrollCheck()

    //내장함수를 이용해서 동작시키기
    //애니메이션이 조금더 부드럽게 동작함 (HTML5에서 사용됨)
    requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;

    if(browserScrollY>0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
};

// 헤더 해당 영역이동
// Scroll에 Animation 효과주기
const animationMove = function(selector){
    // ① 매개변수로 들어온 selector(dataset)로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // 2) 현재 브라우저의 스크롤 정보(y값)
    const browserScrollY = window.screenY ? window.screenY:window.pageYOffset;
    // 3) 이동할 대상의 위치(y값)
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    // 4) 스크롤 이동
    window.scrollTo({top: targetScrollY, behavior : 'smooth'});
};

//스크롤 이벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0 ; i < scrollMoveEl.length ; i++){
    scrollMoveEl[i].addEventListener('click',function(x){
        //data-target의 값
        const target = this.dataset.target;
        //console.log(target);
        animationMove(target);
    });
}

  /*
  element.getBoundingClientRect().x : 현재 창기준 x좌표
  element.getBoundingClientRect().y : 현재 창기준 y좌표
  element.getBoundingClientRect().width : 엘리먼트 가로
  element.getBoundingClientRect().height : 엘리먼트 세로
  element.getBoundingClientRect().top : 현재 창기준 세로 시작점 부터 엘리먼트 윗변 까지의 거리
  element.getBoundingClientRect().left : 현재 창기준 가로 시작점 부터 엘리먼트 왼쪽변 까지의 거리
  element.getBoundingClientRect().right : 현재 창기준 가로 시작점 부터 엘리먼트 오른쪽변 까지의 거리
  element.getBoundingClientRect().bottom : 현재 창기준 세로 시작점 부터 엘리먼트 아래변 까지의 거리
  */
  
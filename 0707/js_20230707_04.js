// Date Object

const today = new Date();
console.log(today); //그리니치시
console.log(typeof today);

// Date() - 생성자 함수를 호출하지 않을시
// 이것은 new Date().toString() 한것과 같다

const today2 = Date();
console.log(today2);
console.log(typeof today2);
console.log(new Date().toString());

// new Date(숫자) - 1970-01-01T00:00:00.000Z 이 시간을 기준으로 +숫자(1000분의1초다) - 밀리세컨드
// 1000 * 60 1분
// 1000 * 60 * 60 한시간
// 1000 * 60 * 60 * 24 하루
console.log(new Date(0));
console.log(new Date(1000*60));
console.log(new Date(1000*60*60*24));

// new Date(년,월) -- 년월이 들어간 형태로 출력된다
console.log(new Date(2022,8));
console.log(new Date(2022,8).toString()); //대한민국 표준시로

//toString에 맞춰하고싶으면 이런식으로하면되는데 브라우저마다 다르게 나올수있어서
// 사용을 안하는것을 권장한다

console.log(new Date('2023 8 04').toString());
console.log(new Date('2023-8-4').toString());

// Date.now() 1970-01-01T00:00:00.000Z 부터 1000분의 1초로 따진 오늘
console.log(Date.now());
// new Date().toDateString() toString을 분리해서 보여줌
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleString('ko-KR'));
console.log(new Date().toLocaleString('en-US'));
console.log(new Date().toLocaleString('de-DE'));

console.log('-------------------------')

console.log(new Date().toString());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());// 0기준
console.log(new Date().getDate());
console.log(new Date().getDay());//
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());

console.log('-------------------------')

console.log('일월화수목금토'[5]+'요일');
console.log('일월화수목금토'[new Date().getDay()]+'요일');
console.log('-------------------------')
const year = new Date().getFullYear();
const month =  new Date().getMonth() + 1;
const date = new Date().getDate();
const day = '일월화수목금토'[new Date().getDay()];
console.log(`${year}년 ${month}월 ${date}일 ${day}요일`);

//Month는 인덱스번호라 7을 적으면 8월이 나온다
let date1 = new Date(2023,7,7);
date1Value = date1.getTime();
console.log(date1Value.toString());

const date2 = new Date();
date2.setTime(date1Value);
console.log(date2.toString());
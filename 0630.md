# 0630
## 자바스크립트
###	크롬인터넷창
	chrome://flags

	Overlay scrollbars -> enabled

### VSCode
   * 확장 플러그인
   * Code Runner 설치
   * Live Server 설치 (Go Live)
   * indent-rainbow (들여쓰기부호 표시해주는것)
   * Bracket Pair Colorize (괄호열었으면 닫는걸 자동으로해주는것)
   * One Dark Pro - 테마색상
   * Material Icon Theme


#### node.js
   * node.js - 자바스크립트는 jsp에서만 실행을 할수있는데
   * * 파이썬이나 자바처럼 일반 pc에서 실행할수 있게끔해주는것이 nodejs
    
    https://nodejs.org/ko
    18.16.1 LTS버전 다운
    실행후 계속Next하여 설치

    
---

# VSCode
   
      test.js 파일 만든후
      터미널 > 새터미널 터미널에서 아래화살표 누르고 GitBash누르면
      하단영역터미널창에 GitBash가 나온다 

---

# 인터넷 콘솔창
      console.log('Hello JavaScript'); - 자바와 다르게 ''과 ""의 구분이없다
      console.log(123);
      console.log(true);

###  객체표현식

      console.log({name:'강아지', age:23, married:false});
   
###  문자열, 숫자, boolean, 배열

      console.log('Hello',111,true,[1,2,3]);

---

# node.js
      이위에 인터넷 콘솔창에 쓰던것들을
      VSCode터미널에서 쓸수 있게 한것이 node.js이다
      터미널창에 node를 치면 사용이 가능하고
      Ctrl+c를 누르면 node에서 빠져나온다

## 사용법
      test.js에
      console.log('Hello JavaScript'); 
      console.log(123);
      console.log(true);
      이런식으로 입력하고 Ctrl+Alt+n을 누르면
      출력창에 쳐둔 코드들이 출력된다

      또는 node test.js 라고 터미널에 입력해도 출력된다

 *     주석기능은 자바와 같다

*      파이썬처럼  ; 를 안붙여도 된다 단. 한줄에 명령문이 두개이상일땐 써줘야한다
      예 : console.log('hello') console.log('no') 이럴땐 ; 해줘야한다

---

### * 변수 선언 키워드
    var 를 썻엇지만 2016년 버전 이후로 관리가 잘 되지않아
    let과 const를 새로 도입했다
    let (= 변수 선언)
    const(= constant 상수선언)

* 사용법
           
*      const SAY_HELLO = 'Hello, ';
      let name = '강아지';

      console.log(SAY_HELLO);
      console.log(name);

*      또는
      console.log(SAY_HELLO, name);

      name = '123'; 변수라 가능
      SAY_HELLO = '123'; 이미 선언한 상수라 불가능

      let number1;
      console.log(number1); //선언후 초기화를 안해줘서 undefined로 표시됨


*      let var1 = 200;
      let var2 = var1;
      console.log(var1,var2);
      var1 = 'java'
      console.log(var1, var2);

      자바와 다른점 2 파이썬처럼 같은변수에 string과 int의 구분없이 재설정이 가능하다
      프로그램 실행시 리터럴 데이터에 200을 올리고
      var1에 할당하고 그것을 var2에 할당하지만
      var1이 java로 바꼇을때 var1만 java를 할당받는다
      (자바의 프리미타입과 같다고 보면된다)
      --프리미티브 타입은 int boolean short ....등등
      프리미티브는 int가 메모리에 올라가고 num에 할당하여 갖고오는것
      --레퍼런스를 예를들면
      Stu s = new Stu면 메모리에 따로 저장이되고 참조하여 갖고오는것


*      이런식으로 선언과 초기화도 가능
      let a,b,c;
      let d=1,e=2,f=3;
      let g, h=4,i;

---

#    primitive data type
    원시타입

---
## 분류
      let a = true;
      let b = 3.14;
      let c ='안녕';

      // typeOf 연산자 : 자료형을 반환한다
      // boolean
      console.log(a, typeof a);

      // number
      console.log(b, typeof b);

      // string
      console.log(c, typeof c);


      //Object , type, class , instance 넷다 95%정도가 비슷하다고 보면된다

      let d;
      console.log(d, typeof d);
      d = null;
      console.log(d, typeof d);

      let e = Symbol('고양이');
      console.log(e, typeof e);

      // 자바스크립트 에서의 자료형 (data type)
      // boolean, number, string, undefined, object, Symbol

### boolean 설명
      비교연산자 boolean
      const b1 = 10>20;
      const b2 = 10<20;
      console.log(b1, typeof b1);
      console.log(b2, typeof b2);
      console.log(b1, typeof b1 , ':',b2, typeof b2);

### number 설명     
       자바스크립트에서는 정수와 실수를 구분하지않고 모두 실수로 취급한다
      let integer = 1234;
      let realNumber = 6.25;
      let negativeNumber = -654;
      console.log(integer , realNumber, negativeNumber);
      console.log(typeof integer , typeof realNumber, typeof negativeNumber);

### string
      //string type
      let name1 = '이순신'
      let name2 = '유관순'
      // back trick ( tab키바로위 물결표시에있는 `)
      let info = ` 이순신은 조선 중기의 무신이었다 본관은 덕수 머시기 자해,
      시호는 충무 한성출신
      동구비보 권관`

      console.log(name1, name2);
      console.log(info);       파이썬의 3개짜리 따옴표랑 똑같다
      (back trick은 엔터친 곳에서 줄바꿈을 자동으로 해주는것)

### undefined type

      let position;
      console.log(position)

      let x = 500;
      console.log('x : ' , x);
      x = undefined;
      console.log('x : ' , x);

      x = null;

      // null : 객체를 초기화 하는 값
      //          객체가 연결되어 있지 않은 변수의 값
      console.log('x : ' , x);
      console.log('x : ', typeof x);

*     변수가 null 인지 아닌지 알아보기
       === : 값과 type을 모두 비교
       == : 값만 비교
      console.log(x === null);

---
### 자바와 자바스크립트
    자바는 자바스크립트와 무관한 언어이다
    자바스크립트는 인터넷이 한창 뜰때 나온것 - 넷스케이프당시에 나옴(모질라재단 옛날에브라우저) 

    
    자바 : 먼저 메모리 공간의 type을 정한 후에 data를 저장
    자바스크립트 : 할당(저장) 되는 data에 의해서 type이 결정됨 - 즉 동적타입(변하는타입)
      자바스크립트는 동적타입이라 타입에 의해 오류가 나는부분같은게 없어서 유지보수측면에서
      오류를 잡아내기가 힘들다 ( 컴파일은 되지만 실행이안됨 )

*     동적타입
      let number = 1234;
      number = '1234';
      number = true;
      number = null;
    
*      하나의 변수에 여러 type의 값들을 할당할 수 있음
      변수 : 한번에 값 하나만 저장(할당) 할수 있음
      let number = 1234, '문자열', true; 이런게 안된다는 말

*       ( 컴파일은 되지만 실행이안됨 )이거에 대한 예시

      function getUpperCase(id){
        return console.log(id.toUpperCase());
      }

      getUpperCase('ohYeah'); //가능
      getUpperCase(1234); // 숫자를 대문자로 변환불가능하기때문에 런타임에러
---

      console.log(123+345)

      let str2 = "";
      let int2 = 123;
      let str3 = str2+int2;
      console.log(str3)
      console.log(typeof str3)
      console.log("123"+345)

---

#### 큰따옴표 , 작은따옴표 , 이스케이프문
      //이스케이프문자 \ 원래 기능에서 탈출하고 원래 문자 그대로를 사용

      console.log('우리나라 \'대한민국\' 입니다'); -가능
      console.log("우리나라 '대한민국' 입니다");      -가능
      console.log("우리나라 \"대한민국\" 입니다");    -가능

      console.log('우리나라 '대한민국' 입니다'); 불가
      console.log("우리나라 "대한민국" 입니다"); 불가

      개행문자(줄바꿈문자) : \n
      탭문자 : \t
      역슬래시 : \\

*     개행
* *         let str2= `오늘날 대한민국에서 수많은 국민들이 존경과 흠모의 대상으로 삼으며, 
            그 존재만으로 애국심과 자부심을 갖게 해주는 한국사의 대표적인 구국영웅이다. 
            세종대왕과 함께 한국사 최고의 위인으로 높은 위상과 명성을 자랑하는 인물로,
            대한민국 수도 서울의 중심 광화문 광장에 세워져있는 대형 동상의 주인공이다`;

* *            let str3= '오늘날 대한민국에서 수많은 국민들이 존경과 흠모의 대상으로 삼으며,\n 그 존재만으로 애국심과 자부심을 갖게 해주는 한국사의 대표적인 구국영웅이다.\n세종대왕과 함께 한국사 최고의 위인으로 높은 위상과 명성을 자랑하는 인물로,\n 대한민국 수도 서울의 중심 광화문 광장에 세워져있는 대형 동상의 주인공이다';

* *         let str4= '이순신(한국 한자: 李舜臣, 1545년 4월 28일 (음력 3월 8일) ~\
            1598년 12월 16일 (음력 11월 19일))은 조선 중기의 무신이었다.\
            본관은 덕수(德水), 자는 여해(汝諧), 시호는 충무(忠武)였으며, \
            한성 출신이었다. 문반 가문 출신으로 1576년(선조 9년) 무과(武科)에 급제[2]하여 그 관직이\
            동구비보 권관, 훈련원 봉사, 발포진 수군만호, 조산보 만호, \
            전라남도수사를 거쳐 정헌대부 삼도수군통제사에 이르렀다. 위키백과';

            console.log('str2 : ' ,str2);

            console.log('str3 : ' ,str3);

            console.log('str4 : ' ,str4);

#### 표현식을 사용하여 문자표현

*      template literal
       ${}안에 상수, 변수, 혹은 수식(표현식 : expression 영어에서 표현식은 수식 외에도 값 이라는 의미로도 쓰인다)

      let name1 = '강아지'
      let age = 24;
      let heigth = 180

      console.log('이름은 name1 이고 나이는 age이고 키는 height cm 입니다');

      console.log(`이름은 ${name1} 이고 나이는 ${age}이고 키는 ${heigth} cm 입니다`);

*     수식도 가능
      let name2 = '아이티';
      let age2 = 18;
      let isStudent = true;

      console.log(`이름은 ${name2} 이고 나이는 ${age2}이고 저는 ${isStudent ? '학생':'무직'}  입니다`);
      

      // 파이썬의 f-string 과 비슷
      // print(f' 이름은 {name1}  이고 나이는 {age}이고 키는 {heigth} cm 입니다')

---
# 문자열 연산
      연산자 의미 - 반환하는 여부

    x==y 값이 같다.
    x===y 자료형도 값도 같다. 권장
    x != y 값이 다르다
    x !== 자료형 또는 값이 다르다. 권장
    x < y   ASCII CODE 순서 상(사전상) x가 먼저 온다
    x <= y  ASCII CODE 순서 상(사전상) x가 먼저 오거나 같다.
    x > y   ASCII CODE 순서 상(사전상) y가 먼저 온다 (x의 ASCII CODE가 더 크다)
    x >= y  ASCII CODE 순서 상(사전상) y가 먼저 오거나 같다.

## 예제
      console.log('강아지'==='강아지');         true
      console.log('강아지'==='강아지고양이');   false
      console.log('강아지'>'강아지고양이');     false
      console.log('강아지'<'강아지고양이');     true
      console.log('111'>'112');                 false
      console.log('111'<'112');                 true

      console.log(                  true true false true
      'ABC' < 'abc',
      'apple' <= 'banna',
      '다라마' > '바자차',
      'it' > 'ai'
      )

      console.log(100>12);                         true
      console.log('100'>'12');                  false
      //숫자와 문자열을 비교하면   
      //문자를 자동으로 숫자로 변환해서 비교한다
      console.log('100'>12);                    true
      console.log('ㄴ'>'ㅈ');                   false

## 증감연산
      let number = 10;
      console.log(number);
      number = number +1;
      console.log(number);
      number += 1;
      console.log(number);

## 문자열의 덧셈
      let str4 = 'Hello'
      str4 = str4 + 'Node.js'
      console.log(str4);
      str4 += 'Spring Framework'
      console.log(str4);

      let str5 = str4 += '~~~~~~~' <자바에서도 가능하다는데 안해봄>
      console.log(str5);

      let str6 = 'hello' + 1234 + true;
      console.log(str6); hello1234true


# string타입 number로 형변환

    parseInt(숫자 모양의 문자열) : 문자열이 정수형으로 변환됨
    parseFloat(숫자모양의 문자열) : 문자열이 실수형으로 변환됨
    Number(숫자모양의 문자열) : 문자열이 숫자로 변환됨




### boolean type의 값을 숫자로 형변환
    Number()
    console.log(Number(true)); --- 1
    console.log(Number(false)); ---0

### string + null + undefined

      let str6 = 'hello' + 1234 + true;
      console.log(str6);
      str6 += null;
      console.log(str6);
      str6 += undefined;
      console.log(str6);
      스트링에 null이나 undefined를 더하면 문자열 형태로 저장된다

# number 상세
      자바스크립트 에서는 숫자를 모두 실수형으로 취급한다 (정수형또한)
    let number = 100 / 0;
## Infinity
*      Infinity : 양의 무한대
      console.log(number)
      // number 타입
      console.log(typeof number)

*     음의 무한대
      console.log(-number)
      console.log(typeof -number)   

*     Infinity : 음의무한대
      let number2 = -1 / 0;
      console.log(number2)
      console.log(typeof number2)

*     Nan : Not a Number
      console.log(typeof -1/0); 

*     Infinity
      let number3 = Infinity;
      console.log(number3)
      console.log(typeof number3)
      즉 인피니티도 숫자취급

## NaN
      Nan : Not a Number
      let var1 = 11/ 'hello';
      let var2 = 22/ 'java';
      let var3 = NaN
      console.log(var1, typeof var1);
      console.log(var2, typeof var2);
      console.log(var3, typeof var3);
      let var4 = -NaN
      console.log(var4, typeof var4);

      결과
      NaN number
      NaN number
      NaN number
      NaN number
      즉 NaN은 number에 있는 객체 

      NaN은 양수 음수 개념이 음슴
      //NaN
      let var5 = 1234/'가나다라';
      console.log(var5);                  NaN
      console.log(var5 == NaN);          false //여기선 1234/'가나다라' 인것이지 NaN이라는 모양이 아니란것
      console.log(var5 === NaN);          false //마찬가지
      console.log(isNaN(var5));           true //반환한 속성자체를 비교
      console.log(Number.isNaN(var5));    true

// isNaN은 강제형변환을 해서 비교하지만 Number.isNaN은 형변환을 하지않고 비교한다
*     console.log('----isNaN() VS Number.isNaN() ----')
      console.log(typeof '1', isNaN('1'), Number.isNaN('1'));
      //string false false
      console.log(typeof true, isNaN(true), Number.isNaN(true));
      //boolean false false
      console.log(typeof 's', isNaN('s'), Number.isNaN('s'));
      //string true false
      console.log(typeof 1234/'abcd', isNaN(1234/'abcd'), Number.isNaN(1234/'abcd'));
      //NaN true true


#   산술 연산자


* 1) 이항(산술)연산자

            let num1 = 10;
            let num2 = 8;

      console.log(num1 + num2);
      console.log(num1 - num2);
      console.log(num1 * num2);
      console.log(num1 / num2);   //항상 실수라 1.25가 나옴 자바는 1이지만
      console.log(num1 % num2);   
      console.log(num1 ** num2); //제곱 10의8승

* 2)증감/감소 연산자

      let count = 1;
      console.log(count);
      count++;
      //자바랑 같다

      let count1 = 10;
      let count2 = count1++ + 1;
      console.log(`count1 : ${count1} , count2 : ${count2}`);

      let count3 = 10;
      let count4 = ++count3 + 1;
      console.log(`count3 : ${count3} , count4 : ${count4}`);

      let count5 = 10;
      console.log(count5++,count5--,++count5,--count5);
      //출력한 후 증가 -> 출력한 후 감소 -> 증가한후 출력 -> 감소한후 출력


* 문자열이 자동으로 숫자형으로 형변환됨
            
      console.log(+'100',-'100', +'가나다라')
      숫자형에 사용하는 연산자를 문자열에 사용하면
       문자열이 자동으로 숫자형으로 변환된다
       '가나다라'는 숫자모양의 문자열이 아니라서 Nan이됨

*       let number1 = '100';
      console.log(number1++, number1) 
      // 100 , 101
      number1 ='100';
      console.log(--number1, number1)
      // 99 99
      number1 ='java';
      console.log(number1++, number1)
      // NaN NaN

* 3)할당연산자

      let number3 = 10;
      number3 += 2;
      console.log(number3)

      += , *= , /=

* 4)실수연산

      console.log(0.1 + 0.2);

      console.log(0.1 + 0.2 === 0.3);

      0.30000000000000004
      false
      부동소수점의 정밀도가 떨어져서 false가 나온다

2의 제곱으로 이루어진 수들은 계산결과가 정확하다

      console.log(0.25*0.5)
      console.log(0.5+0.25+0.125+0.125)
      console.log(0.0625+0.25)

그 외는 이런식으로 결과가 정확해지지않음

      console.log(0.2*0.7)
      console.log(0.4*3)
      console.log(0.9-0.6)
      console.log(0.9-0.3)

* 5)boolean type의 연산자

      let b1 = 1 === 2;
      let b2 = 'abc' !== 'opq';
      let b3 = b1 !==b2;
      let b4 = typeof b1 === typeof b2 ===true;

      console.log('b1 : ',b1,'type :', typeof b1, typeof (typeof b1));
      console.log('b2 : ',b2,'type :', typeof b2, typeof (typeof b2));
      console.log('b3 : ',b3,'type :', typeof b3, typeof (typeof b3));
      console.log('b4 : ',b4,'type :', typeof b4, typeof (typeof b4));

      결과
      b1 :  false type : boolean string 
      b2 :  true type : boolean string 
      b3 :  true type : boolean string
      b4 :  true type : boolean string - boolean이라는 string의 값 두개를 비교해서 트루이고 ???
      뭔소리야

* 6)and or 논리연산

      자바와똑같이 && || 을사용한다
      숫자와 결합하여서도 사용가능
      console.log(true && 10 + 5)
      console.log(true || 10 + 5)
      console.log(false && 10 + 5)
      console.log(false || 10 + 5)

      결과값
      15
      true
      false
      15
* 우선순위 산술연산자(%,*,+,-) > 비교연산자 > 논리연산자
      
      let number =13;
      console.log( 10 < number && number <= 20 || number % 3 === 0);
* shor circuit

      and => 앞에 false값이면 뒤의 연산을 하지않고 바로 false반환
      or => 앞에 true가 나오면 뒤의 연산을 하지않고 바로 true를 반환함 

* 7)삼항연산자

      let age = 19
      console.log( age >= 18 ? '성인' : '어린이')

      let number5 = 35
      console.log(number5 %2 == 0 ? '짝수': '홀수')

      console.log(number5 %2 ? '홀수': '짝수')
      // 2로 나눴을때 나머지가있다면 1 이상을 반환하므로 true
      // 2로 나눠져 나머지가 0으로 반환하면 false
// .toUpperCase() , .toLowerCase()

const str1 = 'JaVA, SCRipT, HELLoW';

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// charAt()

console.log(str1.charAt(3));
//charAt은 -가 먹히지않는다


// at()
// at()은 -가 먹힌다
console.log(str1.at(-1));

// indexOf(), LastIndexOf()

console.log(str1.indexOf("SCR"));
console.log(str1.lastIndexOf("SCR"));

// includes -파이썬 , startsWith, endsWith - 자바
// 포함되어있냐 , 이 글자로 시작하냐 , 이글자로 끝나냐

const str2 = 'javascript is the best language9';
console.log(str2.includes('is'));
console.log(str2.startsWith('java'));
console.log(str2.endsWith('age'));


console.log('------------------------------');
// search(정규표현식);
// 정규표현식에 해당하는 형태의 유무 (index번호로 반환함) 없을시 -1
console.log(str2.search(/[a-z]/));
console.log(str2.search(/[0-9]/));

// 양옆공백 없앨때 (자바 - trim , 파이썬은 - strip , rstrip lstrip)
// 자바스크립트에서는 trim, trimStart(왼쪽공백) , trimEnd(오른쪽공백)

const str3 = '   java script   ';
console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

// repeat(반복횟수) - 글자반복 ( - 1 불가 , 0할시 출력안함) - 자바에도 존재

const str4 = 'java';
console.log(str4.repeat(5));
/*
    method chaining
    메소드 연속으로 호출하기
*/

const str5 = ' 안녕, 안녕하세요 JavaSCRipt jAVa 여러분 ';

console.log(str5.trimStart().toUpperCase().replace('안','은').replaceAll('A','에이').repeat(2));


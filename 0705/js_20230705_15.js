
let greeting = '안녕하세요';

console.log(greeting.length);
console.log(greeting[0]);


/*
    greeting.length - 1
    문자열의 길이 - 1 <-- 마지막 index번호
*/

console.log(greeting[greeting.length-1]);

/*
    문자열(String) 자료형은 immutable type
    immutable type
        ㄴ 문자열 한 번 메모리에 올리면 변형할수 없다
    (mutable : 바뀔수있는)
*/

//그래서 아래것이 먹히질않는다
greeting[greeting.length -1] = '?';
console.log('greeting : ', greeting);
console.log(greeting[greeting.length -1]);
// substring(start,stop)
// slice(start,stop) 
// substr(start,글자수)
// 서브스트링은 앞에서부터 검색이지만
// 서브스트링과 슬라이스는 거의 비슷하지만 음수에서 작동하는것이 반대다
// substr은 인덱스번호부터 원하는 글자수를 잘라내는것
console.log(greeting.substring(0,5));

// 문자열의 replace()메소드 : 대상문자열.replace(old, new)
console.log(greeting.replace('안','옹'));
console.log(greeting);

// split() - 대상문자열.split(구분자 : separator)
// 대상문자열을 지정한 구분자로 구분해서 배열로 반환한다

// 배열의 join()
// 대상배열.join(구분자:separator)
// 배열을 하나로 합침
let strArr = ['ja','va','sc','ri','pt'];
console.log(strArr.join(',').replaceAll(',',''));

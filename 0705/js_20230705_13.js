/*
    encodeURI()
    encodeURIComponent()
    decodeURI()
*/

const uri1 = 'https://www.google.com/search?q=스프링프레임워크';
//유니코드로 변환
const uri2 = encodeURI(uri1);
console.log('uri2 : ',uri2);

const keyword1 = '스프링프레임워크';
const encodedKeyword1 = encodeURIComponent(keyword1);
console.log('encodedKeyword1 : ' , encodedKeyword1); 

const uri3 = `https://www.google.com/search?q=${encodedKeyword1}`
console.log('uri3 : ',uri3);

const rawString = '?q=스프링프레임워크';
console.log('encodeURI',encodeURI(rawString))
console.log('encodeURIComponent',encodeURIComponent(rawString))

// 디코드

const encodedURI = 'https://www.google.com/search?q=%EC%8A%A4%ED%94%84%EB%A7%81%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC'
const decodedURI = decodeURI(encodedURI);
console.log(decodedURI);
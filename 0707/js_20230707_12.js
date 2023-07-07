// 역직렬화 : 문자열 --> 객체
// JSON 의 static method : parse() 메소드를 사용함
console.log(JSON.parse('100'));
//원래 문자열이 었던 것은 따옴표를 이중으로 해야함
//직렬화된 문자열을 받아서 역직렬화를 하므로
console.log(JSON.parse('"강아지"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('null'));
console.log(JSON.parse('[1,2,3,4,5]'));
//키또한 문자열로 받아오기때문에 따옴표 붙여야한다
console.log(JSON.parse('{"a":1,"b":2}'));

console.log('---------------------');
console.log(typeof JSON.parse('100'));
console.log(typeof JSON.parse('"강아지"'));
console.log(typeof JSON.parse('true'));
console.log(typeof JSON.parse('null'));
console.log(typeof JSON.parse('[1,2,3,4,5]'));
console.log(typeof JSON.parse('{"a":1,"b":2}'));
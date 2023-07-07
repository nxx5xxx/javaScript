//객체의 preventExtensions
const obj1 = {m:1, n:2};
// .isExtensible() 메소드 : property 추가 가능 여부
console.log(Object.isExtensible(obj1));
obj1['o'] = 3;
console.log(obj1);

// preventExtensions(오브젝트명) 속성추가를 더이상 못하게함
Object.preventExtensions(obj1);
obj1['p'] = 99;
console.log(obj1);
// p 가 추가안된것을 확인가능

// 속성의 밸류값 증가
obj1.m++;
console.log(obj1);

// 속성의 삭제
delete obj1.n;
console.log(obj1);


console.log('-----------------------------------');

// 배열의 prevneExtensions
const arr1 = [1,2,3];

//배열추가
arr1[3] = 4;
console.log(arr1);
arr1[5] = 6;
//건너띄면 그 사이는 empty가 되어버림

Object.preventExtensions(arr1);
arr1[4] = 6;

console.log(arr1);

// 배열에 push() 메소드를 사용하여
// item추가하기
// arr1.push(5); preventExtensions떄문에 오류발생
console.log(arr1);

console.log('-----------------------------------');

// Object의 seal()메소드
// property의 추가 / 삭제 둘다못함

const obj2 = {a:1, b:2, c:3};
// isSealed() - property 추가/삭제 가능여부를 반환
console.log(Object.isSealed(obj2)); // sealed가 되어있을때 true
Object.seal(obj2);
console.log(Object.isSealed(obj2)); 
obj2.b+=2;
console.log(obj2); // 수정 가능
obj2.d = 5;
console.log(obj2); // 추가 안됨
delete obj2.c;
console.log(obj2); // 삭제 안됨


console.log('-----------------------------------');
// freeze()메소드 - 읽기만 가능
// isFrozon() 메소드 - freeze상태 여부 반환
// 객체안의 객체까지 freeze가 걸리지않는다 - seal도 마찬가지
// 1차원배열만 적용되는것과 비슷하게 생각하면됨
const obj3 = {a:1, b:2, c:3};
console.log(Object.isFrozen(obj3));
Object.freeze(obj3);
console.log(Object.isFrozen(obj3));
delete obj3.a;
console.log(obj3);//삭제안됨
obj3.a++;
console.log(obj3);//수정안됨
obj3.d = 5;
console.log(obj3);//추가안됨

console.log('-----------------------------------');

const obj4 = {
    e : 1,
    f : {g : 3}
}
Object.freeze(obj4);
obj4.e++;
console.log(obj4);
obj4.f.g++;
console.log(obj4);
//f에 프리즈걸어버리면 f안의 객체도 프리즈걸림
Object.freeze(obj4.f);
obj4.f.g++;
console.log(obj4);
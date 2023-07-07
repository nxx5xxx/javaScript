// 함수가 포함된 객체를 직렬화한경우
const obj1 = {
    a:1,
    b:2,
    c:function(){
        return `${this.a - this.b}`
    },
    d: function(){
        return `${this.a + this.b}`
    }
}

console.log(obj1.c());
console.log(obj1.d());
// function은 직렬화한경우 string이 되지않는다

// 선생님해석
// property의 value가 function인 경우에는
// 해당 property는 직렬화가 안된다
console.log(JSON.stringify(obj1));

console.log('--------------------------');

//함수 자체만 직렬화한경우
const funct1 = (n1,n2)=> n1*n2;
function funct2(){
    console.log('강아지');
}

console.log(JSON.stringify(funct1));
console.log(JSON.stringify(funct2));
// 함수는 직렬화가 안됨

console.log('--------------------------');

const obj2 = {
    s: 1,
    t:'2',
    u: 3,
    v: true,
    w: false
}

//리플레이서함수 - replacer
// 두번째인자가 함수인경우를 리플레이서 함수라고 한다

const strObj2 = JSON.stringify(obj2 , (key,value)=>{
    if(key && key <'s' || key > 'u'){
        return undefined;
    }
    if(typeof value ==='number'){
        return value * 10;
    }
    return value;
});
console.log(strObj2);

// 직렬화할 property선택하기
console.log(JSON.stringify(obj2 ,['t','u','v']));
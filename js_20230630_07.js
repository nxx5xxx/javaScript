/**
# String 상세
        자바스크립트 에서는 숫자를 모두 실수형으로 취급한다 (정수형또한)

 */

    let number = 100 / 0;

    // Infinity : 양의 무한대
    console.log(number)
    // number 타입
    console.log(typeof number)

    //음의 무한대
    console.log(-number)
    console.log(typeof -number)



    // Infinity : 음의무한대
    let number2 = -1 / 0;
    console.log(number2)
    console.log(typeof number2)

    // Nan : Not a Number
    console.log(typeof -1/0); 

    //Infinity
    let number3 = Infinity;
    console.log(number3)
    console.log(typeof number3)

    //Nan : Not a Number
    let var1 = 11/ 'hello';
    let var2 = 22/ 'java';
    let var3 = NaN
    console.log(var1, typeof var1);
    console.log(var2, typeof var2);
    console.log(var3, typeof var3);
    let var4 = -NaN
    console.log(var4, typeof var4);

    //NaN은 양수 음수 개념이 음슴

    //NaN
    let var5 = 1234/'가나다라';
    console.log(var5);
    console.log(var5 == NaN); 
    console.log(var5 === NaN);
    console.log(isNaN(var5));
    console.log(Number.isNaN(var5));

    console.log('----isNaN() VS Number.isNaN() ----')
    console.log(typeof '1', isNaN('1'), Number.isNaN('1'));
    //string false false
    console.log(typeof true, isNaN(true), Number.isNaN(true));
    //boolean false false
    console.log(typeof 's', isNaN('s'), Number.isNaN('s'));
    //string true false
    console.log(typeof 1234/'abcd', isNaN(1234/'abcd'), Number.isNaN(1234/'abcd'));
    //NaN true true

    // isNaN은 강제형변환을 해서 비교하지만 Number.isNaN은 형변환을 하지않고 비교한다

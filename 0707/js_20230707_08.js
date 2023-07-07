// Object 객체 key value entries
const student = {
    name : '강아지',
    age : 21,
    height : 183,
    weight : 78
}

console.log(student);
console.log('Object.keys(student)')
console.log(Object.keys(student));
console.log('Object.values(student)');
console.log(Object.values(student));
console.log('Object.entries(student)');
console.log(Object.entries(student));

console.log('------------------------');

for(let key of Object.keys(student)){
    console.log(key);
}

console.log('------------------------');
for(let value of Object.values(student)){
    console.log(value);
}
console.log('------------------------');
for(let entry of Object.entries(student)){
    console.log(`${entry[0]}-${entry[1]}`);
}

console.log('------------------------');
const arr1 = [1,2,3,4,5];
console.log(arr1);
console.log('Object.keys(arr1)')
console.log(Object.keys(arr1));
console.log('Object.values(arr1)');
console.log(Object.values(arr1));
console.log('Object.entries(arr1)');
console.log(Object.entries(arr1));

console.log('------------------------');
const str1 = 'javascript&SPRING'
console.log(str1);
console.log('Object.keys(str1)')
console.log(Object.keys(str1));
console.log('Object.values(str1)');
console.log(Object.values(str1));
console.log('Object.entries(str1)');
console.log(Object.entries(str1));
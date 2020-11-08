let arrSize = 100663296;
let arr = Array(arrSize);

console.time('init time: ');
for(let i = 0 ; i < arr.length; i++) {
    arr[i] = i;
}
console.timeEnd('init time: ');

console.time("Sum time");
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log('Sum: %d', sum);
console.timeEnd("Sum time");

console.time("for time");
for(let i = 0; i < arr.length; i++) {
}
console.timeEnd("for time");


console.time("foreach time");
arr.forEach(ele => ele);
console.timeEnd("foreach time");

let arr = Array(79999999);

console.time('Init time');
for(let i = 0; i < arr.length; i++) {
    arr[i] = i;
}
console.timeEnd('Init time');

console.time("reverse time");
arr.reverse();
console.timeEnd('reverse time');

console.time("reverse for time");
for(let i = 0, j = arr.length - 1 ; i <= arr.length / 2; i++,j--) {
    //console.log(`i: ${i}, j: ${j}`);
    //console.log(`arr[i]: ${arr[i]}, arr[j]: ${arr[j]}`);

    let temp = arr[i];    
    arr[i] = arr[j];
    arr[j] = temp;
    //console.log(`arr[i]: ${arr[i]}, arr[j]: ${arr[j]}`);
}
console.timeEnd('reverse for time');

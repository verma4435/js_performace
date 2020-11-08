const BINARY_BASE_VALUE = 2;
let num =100663296 ;
let numToBinArr = num.toString(BINARY_BASE_VALUE).split('');
let minSignificantBit = numToBinArr.length - 1;
let mostSignificantBit = 0;
let isOddNum = false;
let bin2sPower = numToBinArr.length - 1;
let oddString = '';
console.log(numToBinArr);
if(numToBinArr[minSignificantBit] == 1) {
    isOddNum = true;
}

if(isOddNum) {
    oddString = ' + 1';
}

console.log(`2 pow ${bin2sPower}${oddString}`);

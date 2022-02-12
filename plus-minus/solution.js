'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let neg=0,pos=0,zer=0;
    // Write your code here
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            //negative
            neg ++;
        }else if(arr[i]==0){
            //zero
            zer++;
        }else{
            //positive
            pos++;
        }
    }
    neg = neg/ arr.length;
    pos = pos/ arr.length;
    zer = zer/ arr.length;
    console.log(pos.toFixed(6));
    console.log(neg.toFixed(6));
    console.log(zer.toFixed(6)); 
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

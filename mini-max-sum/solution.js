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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
        let minSum = 0;
        let maxSum =0
        let arrMin = arr.sort().slice(0,4);
        for(let i=0;i<arrMin.length;i++){
            minSum += arrMin[i];
        }
        let arrMax = arr.sort((a,b)=> b-a).slice(0,4);
        for(let i=0;i<arrMax.length;i++){
            maxSum += arrMax[i];
        }
        
console.log(minSum, maxSum)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

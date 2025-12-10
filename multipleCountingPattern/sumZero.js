/**
 * Write a function sumZero which accepts a sorted array of integers.
 * The function should find the first pair, where the sum is 0
 * Return an array that includes both values that sum to zero or undefined if the pair does not exist
 *
 *
 * sumZero([-3, -2, -1, 0, 1, 2, 3])
 * sumZero([-2, 0, 1, 3])
 * sumZero([1, 2, 3])
 */


function naiveSumZero(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        let leftCurrent = numbers[i];

        for(let j = numbers.length - 1; j >= 0; j--) {
            if(numbers[j] + leftCurrent === 0) return [leftCurrent, numbers[j]];
        }
    }

    return undefined;
}

function sumZero(numbers) {
    let i = 0;
    let j = numbers.length - 1;

    while(i < j) {
        if(numbers[i] + numbers[j] === 0) return [numbers[i], numbers[j]];
        else {
            if(numbers[i] + numbers[j] > 0) {
                j--;
            } else {
                i++;
            }
        }
    }
    return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))
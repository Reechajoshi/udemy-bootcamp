/**
 * Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of the values must be the same
 *
 *
 * same([1, 2, 3], [4, 1, 9]) // true
 * same([1,2,3], [1,9]) // false
  */

same = (arr1, arr2) => {
    // loop through array 1
    // if square exists in array 2, remove it from array 1
    // end loop
    // if array 1 is empty, return true
    // else return false

    // O(n)square


    // Better solution
    // loop through array 1 and store it in {value: occurence}
    // loop through second array and store [square]: occurence in it

    // compare the two

    const firstArrayOccurence = {}
    const secondArrayOccurence = {}

    for(let i = 0; i < arr1.length; i++) {
        firstArrayOccurence[arr1[i]] = (firstArrayOccurence[arr1[i]] || 0) + 1
    }

    for(let i = 0; i < arr2.length; i++) {
        secondArrayOccurence[arr2[i]] = (secondArrayOccurence[arr1[i]] || 0) + 1
    }


    console.log(firstArrayOccurence, secondArrayOccurence)

    for(let key in firstArrayOccurence) {
        if(!(key ** 2  in secondArrayOccurence)) return false;

        if(firstArrayOccurence[key] !== secondArrayOccurence[key ** 2]) return false;
    }

    return true
}

console.log(same([1, 2, 3], [4, 1, 9]))
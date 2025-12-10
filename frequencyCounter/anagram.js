/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word or phrase or name formed by rearranging the letters of another such as; cinema is anagram of iceman
 *
 *
 * validAnagram("cinema", "iceman") // true
 * validAnagram("", "") // true
 * validAnagram("car", "rat") // false
 * validAnagram("abc", "bc") // true
 * validAnagram("ab", "cba") // false
 */



function validAnagramOld(str1, str2) {
    if(str1.length < str2.length) return false;

    for(let i = 0; i < str2.length; i++) {
        if(str1.indexOf(str2[i]) !== -1) {
            str2 = str2.slice(0, i);
            str1 = str1.slice(0, str1.indexOf(str2[i]))
        }
    }
    return (str2.length === str2.length) && str1.length === 0;
}

function validAnagram(str1, str2) {
    // check length
    if(str1.length !== str2.length) return false;

    const letterLookup = {}; // this will be used to store letters and their counts


    for(let currentChar of str1) {
        letterLookup[currentChar] = (letterLookup[currentChar] || 0) + 1;
    }

    for(let currentChar of str2) {
        if(!letterLookup[currentChar]) return false;
        letterLookup[currentChar] = letterLookup[currentChar] - 1;
    }

    return true;
}


console.log(validAnagram("aaz", "zaa")) // true


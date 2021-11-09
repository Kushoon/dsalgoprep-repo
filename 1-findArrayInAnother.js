// Given 2 array return true if the 2nd array contains an element from the 1st array
// e.g. ['a', 'b', 'c'], ['d', 'c', 'e'] - return true since 'c' is in both the arrays
// ['a', 'b', 'c'], ['d', 'f', 'e'] - return false since no element from 1st array is in 2nd array

// brute force solution - bsic solution
// Time Complexity - O(n^2), Space Complexity - O(1)
const findArrayInAnother = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

//console.log(findArrayInAnother(['a', 'b', 'c'], ['d', 'c', 'e']));

// Better solution - make one array an object and then loop the other array to check if its a property - using hashtables
// Time Complexity - O(n), Space Complexity - O(a) where 'a' is the size of the array that is converted to an object
const findArrayInAnother2 = (arr1, arr2) => {
    let myLot = {}
    for (var i = 0; i < arr1.length; i++) {
        myLot[arr1[i]] = true;
    }

    for (var j = 0; j < arr2.length; j++) {
        if (arr2[j] in myLot) {
            return true;
        }
    }

    return false;
}

//console.log(findArrayInAnother2(['a', 'b', 'c'], ['d', 'f', 'e']));

// Even better way using JS OOB methods
const findArrayInAnother3 = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item));
}

console.log(findArrayInAnother3(['a', 'b', 'c'], ['d', 'c', 'e']));
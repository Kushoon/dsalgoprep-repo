// Problem: Given an array and a value - find a pair of numbers from the array that add up to the value given
// e.g. array: [1,2,3,9], val: 8 - Result - no pairs found
// array: [1,2,4,4], val: 8 - Result - pair found - 4,4

// Brute Force - Simplest approach
// Take each element and add to all the other numbers and see if anyone matches the value and return the indices or values
// The time complexity will be O(n^2)
const pairAddUpToSum1 = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] + arr[j] == sum) {
          return [i, j];
        }
      }
    }
  }
  return false;
};

//console.log(pairAddUpToSum1([1, 2, 4, 4], 6));

// Better way - O(n)
// Take the 1st and last element and add them - if they are bigger than the sum then take 1st and 2nd last element and add them
// if the sum of 1st and last is smaller then take 2nd element and last element and add and check
// This way it can be done in one pass - but this assumes that the array is sorted - if it wasnt sorted then doing a sort would make the complexity as O(n log n)
const pairAddUpToSum2 = (arr, sum) => {
  let i = 0;
  let j = arr.length - 1;
  while (i != j) {
    if (arr[i] + arr[j] == sum) {
      return [i, j];
    } else if (arr[i] + arr[j] < sum) {
      i++;
    } else if (arr[i] + arr[j] > sum) {
      j--;
    }
  }

  return false;
};
//console.log(pairAddUpToSum2([1, 2, 3, 9], 8));

// Now what if the array is not sorted
// Make a hashmap - store the complement of each value from the array and the sum in the hashtable and check if the key is there in the hashtable for every item
// lookup on a hashmap is O(1)
const pairAddUpToSum3 = (arr, sum) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      return [i, map[arr[i]]];
    } else {
      map[sum - arr[i]] = i;
    }
  }
  return false;
};

console.log(pairAddUpToSum3([5, 4, 7, 3, 2], 8));

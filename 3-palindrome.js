// Given an integer return true if x is a palndrome integer or else return false
// Simple method - convert to string and then loop through each
var isPalindrome = function (x) {
  x = x.toString();
  let stoppingPoint = Math.floor(x.length / 2);
  for (let i = 0; i < stoppingPoint; i++) {
    if (x[i] != x[x.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Another way could be to take the number from the half point - reverse it and compare it to the first half
// 1221 - 21, reverse this to 12 and compare with first half

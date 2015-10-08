/**
 * Created by aljonp on 10/7/15.
 */
function position(nums, num) {
  var cursor = 0;
  while ((nums[cursor] <= num) && (cursor < nums.length)) {
    if (nums[cursor] === num) {
      return cursor;
    }
    cursor++;
  }
  return cursor;
}

var testNums = [1, 3, 5, 6];

console.log(position(testNums, 5));
console.log(position(testNums, 2));
console.log(position(testNums, 7));
console.log(position(testNums, 0));
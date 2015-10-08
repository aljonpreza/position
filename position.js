/**
 * Created by aljonp on 10/7/15.
 */

/* exported position, testNums */
/**
 * Finds the position of a given number by a given array.
 * @param nums The array of numbers
 * @param num The number to be inserted
 * @returns {number} The position to where it should be inserted
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



//console.log(position(testNums, 5));
//console.log(position(testNums, 2));
//console.log(position(testNums, 7));
//console.log(position(testNums, 0));
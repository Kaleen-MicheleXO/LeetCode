// # You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// # Letters are case sensitive, so "a" is considered a different type of stone from "A".

// # Example 1:

// # Input: jewels = "aA", stones = "aAAbbbb"
// # Output: 3
// # Example 2:

// # Input: jewels = "z", stones = "ZZ"
// # Output: 0

// # Constraints:

// # 1 <= jewels.length, stones.length <= 50
// # jewels and stones consist of only English letters.
// # All the characters of jewels are unique.
// # Accepted
// # 834.3K
// # Submissions

var numJewelsInStones = function (jewels, stones) {
  let hashmap = new Set(jewels);
  return stones.split("").reduce((sum, curr) => sum + hashmap.has(curr), 0);
};

var numJewelsInStones = function (jewels, stones) {
  let map = {};
  let count = 0;
  for (const jewel of jewels) {
    map[jewel] = true;
  }
  for (const stone of stones) {
    if (map[stone]) {
      count += 1;
    }
  }
  return count;
};

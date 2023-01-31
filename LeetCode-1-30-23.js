// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1 || s[0] === ")" || s[0] === "}" || s[0] === "]") {
    return false;
  }
  if (
    s[s.length - 1] == "(" ||
    s[s.length - 1] == "[" ||
    s[s.length - 1] == "{"
  ) {
    return false;
  }
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  s.split("");
  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (obj[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

// 804. Unique Morse Code Words
// Easy
// 2.2K
// 1.4K
// Companies
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Example 1:

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".
// Example 2:

// Input: words = ["a"]
// Output: 1

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 12
// words[i] consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let result = [];
  let lib = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  for (let i of words) {
    let res = "";
    for (let j of i) {
      let k = j.charCodeAt(0) - 97;
      res += lib[k];
    }
    if (!result.includes(res)) result.push(res);
  }
  return result.length;
};
/////
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let obj = {};
  let i = 0;
  for (const word of words) {
    let ch = word.split("");
    //console.log(ch)
    let charcode = ch.map((x) => code[x.charCodeAt(0) - 97]).join("");
    console.log(charcode);
    obj[charcode] = obj[charcode] + 1 || 1;
  }
  return Object.keys(obj).length;
};
///
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let obj = {};
  let i = 0;
  for (const word of words) {
    let ch = word.split("");
    let charcode = ch.map((x) => code[x.charCodeAt(0) - 97]).join("");
    obj[charcode] = obj[charcode] + 1 || 1;
  }
  return Object.keys(obj).length;
};

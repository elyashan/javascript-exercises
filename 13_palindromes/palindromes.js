const palindromes = function (str) {
  const allowed = "abcdefghijklmnoprstuvwxyz1234567890";
  const a = "asd";
  const newStr = str
    .toLowerCase()
    .split("")

    .filter((el) => allowed.includes(el))
    .join("");

  return newStr.split("").reverse().join("") == newStr;
};

// Do not edit below this line
module.exports = palindromes;

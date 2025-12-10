const removeFromArray = function (arr, toBeDeleted) {
  let index = arr.indexOf(toBeDeleted);
  return arr.splice(index, 1);
};

// Do not edit below this line
module.exports = removeFromArray;

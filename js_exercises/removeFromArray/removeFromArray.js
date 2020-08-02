// Needs to accept multiple optional arguments
// Will not work if there are more than four items to remove
const removeFromArray = function(userArray, item0, item1, item2, item3, item4) {
  // Transform all arguments into an array
  let userArgsArray = Array.from(arguments);

  // Remove first argument, original array
  userArgsArray.shift();

  // Evaluate each item to remove
  let finalArray = userArray;
  for (let i = 0; i < userArgsArray.length; i++) {
    // Check if there are items to remove
    if (typeof userArgsArray[i] === "undefined") {
      continue;
    }

    // Check for presense in array and remove
    if (finalArray.includes(userArgsArray[i])) {
      // Get the position of the item to be removed
      let itemIndex = finalArray.indexOf(userArgsArray[i]);

      // Slice up the array to remove the item requested
      let resultFront = finalArray.slice(0, itemIndex);
      let resultBack = finalArray.slice(itemIndex + 1);

      finalArray = resultFront.concat(resultBack);
    }
  }

  return finalArray;
}

module.exports = removeFromArray

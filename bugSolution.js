function checkIfExist(arr, num) {
  if (arr.length === 0) {
    return false; // Handle empty array case explicitly
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true; // Return true if the number exists
    }
  }
  return false; // Return false if the number does not exist
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const numToCheck = 3;
const exists = checkIfExist(myArray, numToCheck);
console.log(exists); // Output: true

const myArray2 = [1, 2, 4, 5];
const numToCheck2 = 3;
const exists2 = checkIfExist(myArray2, numToCheck2);
console.log(exists2); // Output: false

const emptyArray = [];
const numToCheck3 = 3;
const exists3 = checkIfExist(emptyArray, numToCheck3);
console.log(exists3); //Output: false
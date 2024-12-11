# Uncommon Javascript Bug: Empty Array Handling in Linear Search

This repository demonstrates a subtle bug related to empty array handling in a simple linear search function written in Javascript. The function `checkIfExist` aims to determine if a given number exists within an array. However, it has a flaw: when the input array is empty, it incorrectly returns `false` even if the target number is not present in the array.  The expected behavior for an empty array should either throw an error indicating an invalid input or simply return `false`. 

The `bug.js` file contains the flawed code, and `bugSolution.js` provides a corrected version.
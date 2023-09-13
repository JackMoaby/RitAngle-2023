# Ritangle Utility Classes - An Overview

## What is this
This documentation, notates all of the utility functions / classes which I have programmed for use in the RitAngle 2023 competition. These were made pre-emptiverly in September based on the probably types of questions that occured during the 2022 version of the competition. 

Coded in JS, with the aim of optimising my programming workflow as I now have more experience in JS than Python.

It should be noted that for the final question of the competition: rust, c++ or another lower-level-language **MUST** be used as last year, our main bottleneck was the problems that occurred with python being slow

## Array Utils

### function `getPermurationArray()`
This function returns an array of all of the permutations of the input array. 

> **Note** 
> This function is limited to arrays of size 10 for the sake of my RAM

```JavaScript
const sampleArray = [1, 2, 3, 4]
ArrayUtils.getPermurationArray(sampleArray)

// Sample output 
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
```

### function `getPermutationIterator()`
This function is an extension of [getPermurationArray](###getPermurationArray) which allows for larger than 10 array elements to be entered, without the fear of using up all of your RAM and your computer dieing.

```JavaScript
const sampleArray = [1, 2, 3, 4]
const permIterator = ArrayUtils.getPermutationIterator(sampleArray);
```

To use this function there is a supplied `.next()` function to get the next output

```JavaScript
let nextPerm = permIterator.next();
while (!nextPerm.done) {
    console.log(nextPerm.value);
    nextPerm = permIterator.next();
}

// Sample output
// [ 1, 2, 3, 4 ]
// [ 1, 2, 4, 3 ]
// [ 1, 3, 2, 4 ]
// ... you get the point
```
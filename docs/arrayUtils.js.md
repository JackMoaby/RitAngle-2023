# ArrayUtils Documentation

## Table of Contents
- [How to](#how-to-initialise)
- [`getPermurationArray()`](#getpermurationarrayarray)
- [`getPermutationIterator()`](#getpermutationiteratorarray)

---

## How to initialise
For use within the src filetree use

```Javascript
import ArrayUtils from "../utils/JS/arrayUtils.js"
```


## `getPermurationArray(array)`

This method returns an array containing all possible permutations of the input array.

> **Warning**
> Limited to arrays with size 10 or under to not error from 11! (39,916,800) or higher combinations 

### Parameters:

| Parameter | Description |
| --- | --- |
| `array` (array) | The input array for which permutations are to be generated. |

### Usage Example:

```Javascript
const inputArray = [1, 2, 3];
const permutations = ArrayUtils.getPermurationArray(inputArray);
console.log(permutations); // [[ 1, 2, 3 ],[ 1, 3, 2 ],[ 2, 1, 3 ], ... , 1]]
```

---

## `getPermutationIterator(array)`

This static method creates an iterator for generating permutations of an input array. Without blowing up your RAM

### Parameters:

| Parameter | Description |
| --- | --- |
| `array` (array) | The input array for which an iterator is to be created. |

### Usage Example:

```Javascript
const inputArray = [1, 2, 3];
const permutations = ArrayUtils.getPermutationIterator(inputArray);

while (!permurations.done()){
    console.log(permutations.next()) // { done: false, value: [ 1, 2, 3 ] }, { done: false, value: [ 1, 3, 2 ] }, ..., { done: false, value: [ 3, 1, 2 ] }, { done: true }
}

```

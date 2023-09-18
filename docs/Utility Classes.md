# Ritangle Utility Classes - A Documentation
## Array Utils

### `getPermurationArray()`
This function returns an array of all of the permutations of the input array. 
> **Note** 
> This function is limited to arrays of size 10 for the sake of my RAM
```JavaScript
const sampleArray = [1, 2, 3, 4]
ArrayUtils.getPermurationArray(sampleArray)

// Sample output 
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
```

### `getPermutationIterator()`
This function is an extension of [getPermurationArray](###getPermurationArray) which generates the next permutation of an input array

> **Note**
> This function allows for arrays larger than 10 without fear of my RAM exploding

```JavaScript
const sampleArray = [1, 2, 3, 4]
const permIterator = ArrayUtils.getPermutationIterator(sampleArray);
```

This function is supplied with:
> `.next()` to get the next output
> `.done` to see if we are finished through the iterations
> `.value` to see the current value

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

## GPU.js

See [gpu.js documentation](https://github.com/gpujs/gpu.js)
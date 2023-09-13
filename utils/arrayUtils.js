class ArrayUtils {
    static getPermurationArray(array) {
        if (!Array.isArray(array) || array.length <= 1) {
            return [array.slice()]
        }
        if (array.length > 10) {
            return "It's too big, I cannot permutate it"
        }

        const permutations = [];
        const visited = new Array(array.length).fill(false);

        function generatePermutations(currentPermutation) {
            if (currentPermutation.length === array.length) {
                permutations.push(currentPermutation.slice());
                return;
            }

            for (let i = 0; i < array.length; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    currentPermutation.push(array[i]);
                    generatePermutations(currentPermutation);
                    currentPermutation.pop();
                    visited[i] = false;
                }
            }
        }

        generatePermutations([]);
        return permutations;
    }

    static getPermutationIterator(array) {
        if (!Array.isArray(array) || array.length <= 1) {
            return [array.slice()];
        }
        if (array.length > 10) {
            return "It's too big, I cannot permutate it";
        }

        const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));

        const totalPermutations = fact(array.length);
        let currentIndex = 0;

        return {
            next: function() {
                if (currentIndex >= totalPermutations) {
                    return {
                        done: true
                    };
                }

                const currentPermutation = array.slice();
                let i = currentIndex;

                for (let j = 0; j < array.length - 1; j++) {
                    const div = fact(array.length - 1 - j);
                    const index = Math.floor(i / div);
                    const temp = currentPermutation[j + index];
                    currentPermutation[j + index] = currentPermutation[j];
                    currentPermutation[j] = temp;
                    i %= div;
                }

                currentIndex++;

                return {
                    done: false,
                    value: currentPermutation,
                };
            },
        };
    }
}

module.exports = ArrayUtils
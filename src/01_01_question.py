import itertools

permArr = [list(subset) for subset in itertools.permutations([1, 2, 3, 4, 5, 6, 7, 8], 8)]
counter = 0

for arr in permArr:
    if arr[0] * arr[1] * arr[2] * arr[3] * arr[4] < arr[5] * arr[6] * arr[7]:
        counter += 1

print(f"Result {counter / len(permArr)}")
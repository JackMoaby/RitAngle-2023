import itertools

class ArrayUtils:
    @staticmethod
    def getPermurationArray(array):
        return [list(subset) for subset in itertools.permutations(array, len(array))]
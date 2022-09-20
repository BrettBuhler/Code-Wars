"""
DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It's guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
"""
#MY SOLUTION
def find_uniq(arr):
    for i in range(0, len(arr)):
        if i == 0:
            if arr[i] != arr[i+1] and arr[i] != arr[i+2]:
                return arr[i]
        elif i != len(arr) -1:
            if arr[i] != arr[i-1] and arr[i] != arr[i+1]:
                return arr[i]
        else:
            if arr[i] != arr[i-1] and arr[i] != arr[i-2]:
                return arr[i]
/*
What adds up
Given three arrays of integers your task is to create an algorithm that finds the numbers in the first two arrays whose sum is equal to any number in the third. The return value should be an array containing the values from the argument arrays that adds up. The sort order of the resulting array is not important. If no combination of numbers adds up return a empty array.

Example
A small example: Given the three input arrays a1 = [1, 2]; a2 = [4,3]; a3 = [6,5,8], we need to find the number pairs from a1 and a2 that sum up to a number in a3 and return those three numbers in an array. In this example, the result from the function would be [[1, 4, 5] , [2, 4, 6], [2, 3, 5]].

Given three arrays
a1      a2      a3
 1       4       6          (a1 a2 a3)    (a1 a2 a3)  (a1 a2 a3)
 2       3       5      =>  [[1, 4, 5] ,  [2, 4, 6],  [2, 3, 5]]
                 8
                 
each value in the result array contains one part from each of the arguments.
Testing
A function compare_array is given. This function takes two arrays and compares them invariant of sort order.

Test.expect(compare_arrays(addsup([1,2], [3,1], [5,4]), [[1,3,4], [2,3,5]]))
Greater goal
For extra honor try and make it as effective as possible. Discuss whats the most effective way of doing this. The fastest way i can do this is in O(n^2). Can you do it quicker?
*/

package kata

func AddsUp (arr1, arr2, arr3 []int) [][3]int {
	var returnArr [][3]int
	for i := 0; i < len(arr1); i++ {
		for j := 0; j < len(arr2); j++ {
			for k := 0; k < len(arr3); k++{
				if arr1[i] + arr2[j] == arr3[k] {
					tempArr := [3]int{arr1[i], arr2[j], arr3[k]}
					returnArr = append(returnArr, tempArr)
				}
			}
		}
	}
	return returnArr
}

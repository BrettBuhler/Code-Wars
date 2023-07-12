/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

package kata

func FindOutlier (integers []int) int {
	var one, two, three = integers[0], integers[1], integers[2]
	var Is_Even bool = one % 2 == 0 && two % 2 == 0 || one % 2 == 0 && three % 2 == 0 || two % 2 == 0 && three % 2 == 0
	var Return_Int int
	for i := 0; i < len(integers); i++ {
		if Is_Even {
			if integers[i] % 2 != 0 {
				Return_Int = integers[i]
				continue
			}
		} else {
			if integers[i] % 2 == 0 {
				Return_Int = integers[i]
				continue
			}
		}
	}
	return Return_Int
}
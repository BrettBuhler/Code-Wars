/*
Two Joggers
Description
Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

Illustration
Example where Charles (dashed line) runs a shorter lap than Bob:

Example laps

Task
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)

The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run

Examples:

nbrOfLaps(5, 3); // returns [3, 5]
nbrOfLaps(4, 6); // returns [3, 2]
*/
package kata

func NbrOfLaps (x, y uint16) [2]uint16 {
	X := int(x)
	Y := int(y)
	GCD := Euclid(X, Y)
	xRes := y / GCD
	yRes := x / GCD
	return [2]uint16{xRes, yRes}
}

func Euclid (a, b int) uint16 {
	for b != 0 {
		a, b = b, a%b
	}
  aRes := uint16(a)
	return aRes
}

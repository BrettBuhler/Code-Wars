package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
  test := SpecialPrimes(10000)
	fmt.Println("TEST", test)
}
func SpecialPrimes(n int) [3][3]int {
	dec := []int{}
	inc := []int{}
	bounce := []int{}
	for i := 101; i <= n; i += 2 {
		a, b, c := isSpecial(i)
		if a {
			if isPrime(i) {
				if b {
					dec = append(dec, i)
				} else if c {
					inc = append(inc, i)
				} else {
					bounce = append(bounce, i)
				}
			}
		}
	}
  return [3][3]int{
    getRetArr(bounce),
    getRetArr(inc),
    getRetArr(dec),
  }
}
func getRetArr(arr []int) [3]int {
	if len(arr) == 0 {
		return [3]int{0, 0, 0}
	}
	min := arr[0]
	max := arr[0]
	for i := 0; i < len(arr); i++ {
		if arr[i] > max {
			max = arr[i]
		} else if arr[i] < min {
			min = arr[i]
		}
	}
	return [3]int{min, max, len(arr)}
}
func isPrime(n int) bool {
	if n%3 == 0 {
		return false
	}
	for i := 5; i <= int(math.Sqrt(float64(n))); i += 6 {
		if n%i == 0 || n%(i+2) == 0 {
			return false
		}
	}
	return true
}
func isDivisibleByPerfectSquare(n int) bool {
	if n < 4 {
		return false
	}
	sqrt := int(math.Sqrt(float64(n)))
	for i := 2; i <= sqrt; i++ {
		if n%(i*i) == 0 {
			return true
		}
	}
	return false
}
func isSpecial(n int) (bool, bool, bool) {
	str_num := strconv.Itoa(n)
	index_one, _ := strconv.Atoi(string(str_num[0]))
	index_last, _ := strconv.Atoi(string(str_num[len(str_num)-1]))
	product := index_one * index_last
	if product == 45 {
		return false, false, false
	}
	sum := 0
	int_map := make(map[int]bool)
	dec := true
	inc := true
	smol := 0
	big := 10
	for _, char := range str_num {
		digit := int(char - '0')
		if dec {
			if big > digit {
				big = digit
			} else {
				dec = false
			}
		}
		if inc {
			if smol < digit {
				smol = digit
			} else {
				inc = false
			}
		}
		if !int_map[digit] {
			int_map[digit] = true
		} else {
			return false, false, false
		}
		if digit == 0 {
			return false, false, false
		}
		sum += digit
	}
	if isDivisibleByPerfectSquare(sum) {
		return true, dec, inc
	}
	return false, false, false
}

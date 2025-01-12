package main

import (
	"math/big"
)

func main() {
	result := SumMultTriangNum(5, 8)
}
func SumMultTriangNum(m, n int) *big.Int {
	var nums []*big.Int
	for i := 0; i < m; i++ {
		number := (i + 1) * (i + 2) / 2
		nums = append(nums, big.NewInt(int64(number)))
	}
	LCM := getLcm(nums)
	Factor := getFactor(n)

	a := big.NewInt(0).Set(LCM)
	b := big.NewInt(int64(Factor))
	return new(big.Int).Mul(a, b)
}
func gcd(a, b *big.Int) *big.Int {
	if b.Cmp(big.NewInt(0)) == 0 {
		return a
	}
	return gcd(b, new(big.Int).Mod(a, b))
}
func lcm(a, b *big.Int) *big.Int {
	return new(big.Int).Div(new(big.Int).Mul(a, b), gcd(a, b))
}
func getLcm(arr []*big.Int) *big.Int {
	res := arr[0]
	for _, n := range arr[1:] {
		res = lcm(res, n)
	}
	return res
}
func getFactor(n int) int {
	return n * (n + 1) / 2
}

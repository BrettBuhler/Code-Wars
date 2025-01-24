package main

import "fmt"

func main() {
	testStruct := struct {
		a int
		b int
		c int
		d int
		e int
		f int
		g int
	}{
		a: 1,
		b: 10,
		c: 100,
		d: 475,
		e: 1675,
		f: 4954,
		g: 12952,
	}
	for i := 0; i < 7; i++ {
		res := TotalIncDec(i)
		var expect int
		switch i {
		case 0:
			expect = testStruct.a
    case 1:
      expect = testStruct.b
    case 2:
      expect = testStruct.c
    case 3:
      expect = testStruct.d
    case 4:
      expect = testStruct.e
    case 5:
      expect = testStruct.f
    case 6:
      expect = testStruct.g
		}
    fmt.Printf("AT INDEX %v\nGOT=%v\nEXPECT=%v\n-----\n", i, res, expect)

	}
  big := TotalIncDec(201)
  fmt.Println(big)
}

func TotalIncDec(n int) uint64 {
	if n == 0 {
		return 1
	}

	var increasing uint64 = 0
	var decreasing uint64 = 0
	for i := 0; i < n; i++ {
    comb1 := comb(i + 10, i + 1)
		increasing += comb1
    if i == 0 {
      decreasing += comb1
    } else {
      decreasing += comb1 - comb(i + 9, i)
    }
	}
  nxt := uint64(n*10)
	return uint64(increasing + decreasing - nxt)
}
func comb(a, b int) uint64 {
	if b > a {
		return 0
	}
	if b == 0 || a == b {
		return 1
	}
  if b > (a - b) {
    b = a - b
  }
  var num uint64 = 1
	var den uint64 = 1
	for i := 0; i < b; i++ {
		num *= uint64(a - i)
		den *= uint64(i + 1)
	}
  if num < 0 || den < 0 {
    //fmt
    fmt.Printf("NUM: %v\nDEN %v\n---------------\n", num, den)
  }
	return uint64(num / den) 
}

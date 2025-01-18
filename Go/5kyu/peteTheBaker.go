package main

import "fmt"

func main() {
	rec := map[string]int{
		"one": 1,
		"two": 2,
	}
	avail := map[string]int{
		"one": 2,
		"two": 8,
	}
	val := Cakes(rec, avail)
	fmt.Println("val=", val)
}

func Cakes(recipe, available map[string]int) int {
	makeCake := true
	count := 0
	for makeCake == true {
		for key, val := range recipe {
			if val > available[key] {
				makeCake = false
				break
			} else {
				available[key] = available[key] - val
			}
		}
		if makeCake == true {
			count++
		}
	}
	return count
}

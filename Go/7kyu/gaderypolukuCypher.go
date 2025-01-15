package main

import (
	"fmt"
	"strings"
)

func main() {
	//str := Encode("GAgaDEde")
	//fmt.Println(str)
	getMapVals("GADERYPOLUKIgaderypoluki")
}

func Encode(str string) string {
	var builder strings.Builder
	key_val := map[int]int{
		71:  65,
		65:  71,
		103: 97,
		97:  103,
		68:  69,
		69:  68,
		100: 101,
		101: 100,
		82:  89,
		89:  82,
		114: 121,
		121: 114,
		112: 111,
		111: 112,
		80:  79,
		79:  80,
		108: 117,
		117: 108,
		76:  85,
		85:  76,
		107: 105,
		105: 107,
		75:  73,
		73:  75,
	}
	for _, char := range str {
		if value, exists := key_val[int(char)]; exists {
			builder.WriteRune(rune(value))
		} else {
			builder.WriteRune(char)
		}
	}
	return builder.String()
}
func Decode(str string) string {
	return Encode(str)
}
func getMapVals(str string) {
	for _, char := range str {
		fmt.Println(char)
	}
}

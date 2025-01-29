package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(Capitalize("abcded"))
}

func Capitalize(str string) []string {
	var builder1, builder2 strings.Builder
	for i, char := range str {
		to_byte := byte(char)
		if i%2 == 0 {
			builder1.WriteByte(to_byte &^ 0x20)
			builder2.WriteByte(to_byte | 0x20)
		} else {
			builder1.WriteByte(to_byte | 0x20)
			builder2.WriteByte(to_byte &^ 0x20)
		}
	}
	return []string{builder1.String(), builder2.String()}
}

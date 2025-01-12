package main

import (
	"fmt"
	"strings"
)

func main() {
	var test = VertMirror("abc\nefg\n")
	var test2 = HorMirror("abc\nefg")
	fmt.Println(test)
	fmt.Println("------")
	fmt.Println(test2)
	var test3 = Oper(VertMirror, "abc\nefg")
	fmt.Println("-------")
	fmt.Println(test3)
}

func VertMirror(s string) string {
	var builder strings.Builder
	string_slice := strings.Split(s, "\n")
	for i, str := range string_slice {
		for i := len(str) - 1; i >= 0; i-- {
			builder.WriteByte(str[i])
		}
		if i != len(string_slice)-1 {
			builder.WriteString("\n")
		}
	}
	return builder.String()
}
func HorMirror(s string) string {
	var builder strings.Builder
	string_slice := strings.Split(s, "\n")
	for i := len(string_slice) - 1; i >= 0; i-- {
		builder.WriteString(string_slice[i])
		if i != 0 {
			builder.WriteString("\n")
		}
	}
	return builder.String()
}
func Oper(fct func(string) string, s string) string {
	return fct(s)
}

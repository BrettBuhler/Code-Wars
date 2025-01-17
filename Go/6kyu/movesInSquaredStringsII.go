package main

import (
	"fmt"
	"strings"
)

func main() {

	str := SelfieAndRot("abcd\nefgh\nijkl\nmnop")
	fmt.Printf("ROT = %s\n", str)
}

func SelfieAndRot(s string) string {
	slice := strings.Split(s, "\n")
	rotSlice := strings.Split(Rot(s), "\n")
	mergedSlice := append(dotDotDot(slice, true), dotDotDot(rotSlice, false)...)
	return strings.Join(mergedSlice, "\n")
}
func dotDotDot(slice []string, rot bool) []string {
	var LEN int = len(slice)
	ret := make([]string, LEN)
	for i, v := range slice {
		if !rot {
			toJoin := []string{strings.Repeat(".", LEN), v}
			ret[i] = strings.Join(toJoin, "")
		} else {
			toJoin := []string{v, strings.Repeat(".", LEN)}
			ret[i] = strings.Join(toJoin, "")
		}
	}
	return ret
}
func Rot(s string) string {
	slice := strings.Split(s, "\n")
	var builder strings.Builder
	for i := len(slice) - 1; i >= 0; i-- {
		builder.WriteString(rev(slice[i]))
		if i != 0 {
			builder.WriteString("\n")
		}
	}
	return builder.String()
}
func rev(s string) string {
	var builder strings.Builder
	for i := len(s) - 1; i >= 0; i-- {
		builder.WriteRune(rune(s[i]))
	}
	return builder.String()
}
func Oper(f func(string) string, x string) string {
	return f(x)
}

package main

import (
	"fmt"
	"strings"
)

func main () {
  arr := []string{"aaabbbccc","abc","alloott"}
  str_res := Dup(arr)
  fmt.Println(str_res)
}

func Dup(arr []string) []string {
  for j, str := range arr {
    var builder strings.Builder
    for i, char := range str { 
      if i < (len(str)-1) {
        if rune(str[i+1]) != char {
          builder.WriteRune(char)
        }
      } else {
        builder.WriteRune(char)
      }
    }
    arr[j] = builder.String()
  }
  return arr
}

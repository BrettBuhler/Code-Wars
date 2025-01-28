package main

import (
	"fmt"
	"strings"
)

func main () {
  myStr := ToJadenCase("How can my eyes be real?")
  fmt.Println(myStr)
}

func ToJadenCase (str string) string {
  return strings.Title(str)
}

package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println("HELLOW WORLD")
  myString := "abcd\nefgh\nijkl\nmnop"
	ret := Diag1Sym(myString)
	fmt.Println("RET:", ret)
  fot90 := Rot90Clock(myString)
  fmt.Println("fot90: ", fot90)
  selfi := selfie_and_diag1(myString)
  fmt.Println("selfi = ", selfi)
}

func Rot90Clock(s string) string {
  var builder strings.Builder
  reversed := strings.Split(s, "\n")
  for i := len(reversed)-1;i>=0;i--{
    builder.WriteString(reversed[i])
    if i != 0 {
      builder.WriteRune('\n')
    }
  }
	return Diag1Sym(builder.String()) 
}

func SelfieAndDiag1 (s string) string {
  var builder strings.Builder
  diag := Diag1Sym(s)
  slice := strings.Split(diag,"\n")
  s_slice := strings.Split(s, "\n")
  for i,_ := range s_slice {
    s_slice[i] = s_slice[i]+"|"+slice[i]
    if i!=len(s_slice)-1{
      s_slice[i]+="\n"
    }
  }
  for _,v := range s_slice {
    builder.WriteString(v)
  }
  return builder.String()
}

func Diag1Sym(s string) string {
	string_arr := strings.Split(s, "\n")
	retSlice := make([][]rune, len(string_arr))
	for i := range retSlice {
		retSlice[i] = make([]rune, len(string_arr[0]))
	}
	for i, v := range string_arr {
		for j, x := range v {
			retSlice[j][i] = x
		}
	}
	var builder strings.Builder
	for index, i := range retSlice {
		for _, j := range i {
			builder.WriteRune(rune(j))
		}
		if index != len(retSlice)-1 {
			builder.WriteRune('\n')
		}
	}
	return builder.String()
}
func Oper(f func(v string) string, x string) string {
  return f(x)
}

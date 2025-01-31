package main

import (
	"fmt"
	"strings"
	//"strings"
)

func main() {

	ret := ContainAllRots("bsjq", []string{"bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"})
	fmt.Println("RET:", ret)
}

func ContainAllRots(rot_me string, arr []string) bool {
	allRots := rot_me + rot_me
	length := len(rot_me)
	values := make(map[string]struct{})
	for _, str := range arr {
		if strings.Contains(allRots, str) {
			values[str] = struct{}{}
		}
	}
	count := len(values)
  last := rot_me[0]
  for i, char := range rot_me {
    if i != 0 {
      if last == byte(char) {
        count--
      }
    }
    last = rot_me[i]
  }
  if count == length {
    return true
  }
	return false
}

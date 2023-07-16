/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

package kata

import (
	"strings"
	"sort"
)

func TwoToOne(s1 string, s2 string) string {
	s3 := s1 + s2
	charMap := make(map[rune]bool)
	for _, item := range s3 {
		charMap[item] = true
	}
	var sorted []string
	for item := range charMap {
		sorted = append(sorted, string(item))
	}
	sort.Strings(sorted)
	res := strings.Join(sorted, "")
	return res
}



package kata
import (
	"strings"
)
func GetCount(str string) (count int) {
  vowels := "aeiou"
  lowerCaseStr := strings.ToLower(str)
  for _, char := range lowerCaseStr {
    if strings.ContainsRune(vowels, char) {
      count++
    }
  }
  return count
}
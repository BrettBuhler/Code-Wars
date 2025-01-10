package main
import ("fmt")

func main() {
  s1 := "helloooo" 
  s2 := "ssssss000oo"
  s3 := LCS(s1, s2)
  fmt.Printf("s1 = %v s2 = %v s3 = %v\n", s1, s2, s3)
}

func firstProperty(str1, str2 string) string {
  len1 := len(str1)
  len2 := len(str2)
  if len1 > 0 && len2 > 0 && str1[len1-1] == str2[len2-1] {
    return string(str1[len1-1])
  }
  return ""
}

func LCS(str1, str2 string) string {
  var big string
  var small string
  var firstPropertyString = ""
  if len(str1) > len(str2) {
    big = str1
    small = str2
  } else {
    big = str2
    small = str1
  }
  for i := len(small) - 1; i>=0; i-- {
    char := firstProperty(big, small)
    if char != "" {
      firstPropertyString+=char
      big = big[0:len(big)-1]
      small = small[0:len(small)-1]
    }
  }
  return firstPropertyString
}

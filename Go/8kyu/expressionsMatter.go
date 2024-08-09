package kata

func ExpressionMatter(a int, b int, c int) int {
  if (a == 1) {
    if (c == 1) {
      return a + b + c
    } else {
      return (a + b) * c
    }
  } else if (b == 1 || c == 1) {
    return a * (b + c)
  } else {
    return a * b * c
  }
 }
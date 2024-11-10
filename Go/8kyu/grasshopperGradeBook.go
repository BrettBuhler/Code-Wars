package kata

func GetGrade(a,b,c int) rune {
    var average = (a + b + c) / 3
    if (average >= 90) {
      return 'A'
    } else if (average >= 80) {
      return 'B'
    } else if (average >= 70) {
      return 'C'
    } else if (average >= 60) {
      return 'D'
    } else {
      return 'F'
    }
}
package kata

func CatYears (years int, dogCat bool) (result int) {
  var catYears = 0
  if (years >= 1) {
    years = years - 1
    catYears = catYears + 15
  }
  if (years >= 1) {
    years = years - 1
    catYears = catYears + 9
  }
  if (years >= 1) {
    if (dogCat) {
      catYears = catYears + (years * 4)
    } else {
      catYears = catYears + (years * 5)
    }
  }
  return catYears
}


func CalculateYears(years int) (result [3]int) {
  // Write your solution here
  return [3]int{years, CatYears(years, true), CatYears(years, false)}
}
package kata

import (
	"strings"
)

func Points(games []string) int {
	points := 0
	for _, str := range games {
		split := strings.Split(str, ":")
		if split[0] > split[1] {
			points += 3
		}
		if split[0] == split[1] {
			points += 1
		}
	}
	return points
}


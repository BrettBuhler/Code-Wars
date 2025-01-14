package kata

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(Interpreter("*s*[e]", 1, 2, 3))
}
func Interpreter(code string, i, w, h int) string {
	boolSlice := make([][]bool, h)
	for l := range boolSlice {
		boolSlice[l] = make([]bool, w)
	}
	processCmd(&boolSlice, code, i)
	return printState(boolSlice)
}
func processCmd(state *[][]bool, cmd string, iterations int) {
	if iterations == 0 {
		return
	}
	up := func(y_val *int, len int) {
		if *y_val > 0 {
			*y_val--
		} else {
			*y_val = len
		}
	}
	right := func(x_val *int, len int) {
		if *x_val < len {
			*x_val++
		} else {
			*x_val = 0
		}
	}
	left := func(x_val *int, len int) {
		if *x_val > 0 {
			*x_val--
		} else {
			*x_val = len
		}
	}
	down := func(y_val *int, len int) {
		if *y_val < len {
			*y_val++
		} else {
			*y_val = 0
		}
	}
	next := func(x_val *int, y_val *int, state [][]bool, indx *int, str string) int {
		fmt.Println("value,", state[*y_val][*x_val])
		leftCount := 0
		rightCount := 0
		if !state[*y_val][*x_val] {
			for i := *indx; i < len(str); i++ {
				fmt.Println("str[i] =", str[i])
				switch str[i] {
				case '[':
					leftCount++
				case ']':
					rightCount++
				}
				fmt.Printf("rightCount: %v\nleftCount: %v\n", rightCount, leftCount)
				if rightCount > 0 && rightCount == leftCount {
					return i
				}
			}
		}
		return -1
	}
	last := func(x_val *int, y_val *int, state [][]bool, indx *int, str string) int {
		fmt.Println("in last", state[*y_val][*x_val])
		if state[*y_val][*x_val] {
			leftCount := 0
			rightCount := 0
			for i := *indx; i >= 0; i-- {
				switch str[i] {
				case '[':
					fmt.Println("leftcount++")
					leftCount++
				case ']':
					rightCount++
					fmt.Println("rightcount++")
				}
				if rightCount > 0 && rightCount == leftCount {
					fmt.Println("returning (last)", i)
					return i
				}
			}
		}
		return -1
	}
	flip := func(x int, y int, state *[][]bool) {
		(*state)[y][x] = !(*state)[y][x]
	}
	x := 0
	y := 0
	count := 0
	i := 0
	for i < len(cmd) {
		char := rune(cmd[i])
		switch char {
		case rune('n'):
			up(&y, len((*state))-1)
			count++
		case 'e':
			right(&x, len((*state)[0])-1)
			count++
		case 's':
			down(&y, len((*state))-1)
			count++
		case 'w':
			left(&x, len((*state)[0])-1)
			count++
		case '[':
			temp := next(&x, &y, *state, &i, cmd)
			if temp >= 0 {
				count++
				fmt.Println("[ i was", i)
				i = temp
				fmt.Println("[ i is now", i)
				fmt.Printf("X: %v\nY: %v\n", x, y)
			} else {
				count++
			}
		case ']':
			temp := last(&x, &y, *state, &i, cmd)
			if temp >= 0 {
				count++
				fmt.Println("i was", i)
				i = temp
				fmt.Println("i is now", i)
				fmt.Printf("X: %v\nY: %v\n", x, y)
				fmt.Println("count+", count)
			} else {
				count++
				fmt.Println("past ] with -1")
				fmt.Printf("X: %v\nY: %v\n", x, y)
				fmt.Println("count=", count)
			}
		case '*':
			flip(x, y, state)
			count++
		}
		if count > iterations {
			break
		}
		i++
	}
}
func printState(state [][]bool) string {
	var builder strings.Builder
	for index, i := range state {
		for _, v := range i {
			if v {
				builder.WriteString("1")
			} else {
				builder.WriteString("0")
			}
		}
		if index != len(state)-1 {
			builder.WriteString("\r\n")
		}
	}
	return builder.String()
}

package kata

import (
	"fmt"
	"strconv"
)

func Int32ToIp(n uint32) string {
	binary := fmt.Sprintf("%032b", n)
	binary_len := len(binary)
	partSize := binary_len / 4
	var parts []string
	for i := 0; i < 4; i++ {
		start := i * partSize
		end := start + partSize
		parts = append(parts, binary[start:end])
	}
	ipArray := make([]string, 4)
	for i, part := range parts {
		num, err := strconv.ParseInt(part, 2, 0)
		if err != nil {
			fmt.Println("error during parse int conversion", err)
			return ""
		}
		ipArray[i] = strconv.FormatInt(num, 10)
	}
  return fmt.Sprintf("%s.%s.%s.%s", ipArray[0],ipArray[1],ipArray[2],ipArray[3])
}

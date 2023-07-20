/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

package kata

func SameBrace (char1 byte, char2 byte) bool {
	switch (char1) {
	case '{':
		if char2 == '}' {
			return true
		} else {
			return false
		}
	case '(':
		if char2 == ')' {
			return true
		} else {
			return false
		}
	case '[':
		if char2 == ']' {
			return true
		} else {
			return false
		}
	default:
		return false
	}
}

func ValidBraces (str string) bool {
	if (str == "") {
		return true
	}
	for i := 0; i < len(str); i++ {
		if (i < len(str) - 1) {
			if (SameBrace(str[i], str[i+1])){
				tempStr := str[0: i] + str[i+2: len(str)]
				return ValidBraces(tempStr)
			}
		}
	}
	return false
}
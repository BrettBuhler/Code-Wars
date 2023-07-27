/*
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

package kata

func Rot13 (msg string) string {
	bytes := []byte(msg)
	for i := 0; i < len(bytes); i++ {
		bytes[i] = GetRot13(bytes[i])
	}
	return string(bytes)
}

func GetRot13 (char byte) byte {
	if char > 64 && 91 > char {
		char += 13
		if char > 90 {
			char -= 26
		}
	} else if char > 96 && 123 > char {
		char += 13
		if char > 122 {
			char -= 26
		}
	}
	return char
}
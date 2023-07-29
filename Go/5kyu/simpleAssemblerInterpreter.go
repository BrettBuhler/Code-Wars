/*
This is the first part of this kata series. Second part is here.

We want to create a simple interpreter of assembler which will support the following instructions:

mov x y - copies y (either a constant value or the content of a register) into register x
inc x - increases the content of the register x by one
dec x - decreases the content of the register x by one
jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward, y can be a register or a constant), but only if x (a constant or a register) is not zero
Register names are alphabetical (letters only). Constants are always integers (positive or negative).

Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

The function will take an input list with the sequence of the program instructions and will execute them. The program ends when there are no more instructions to execute, then it returns a dictionary (a table in COBOL) with the contents of the registers.

Also, every inc/dec/jnz on a register will always be preceeded by a mov on the register first, so you don't need to worry about uninitialized registers.

Example
["mov a 5"; "inc a"; "dec a"; "dec a"; "jnz a -1"; "inc a"]

visualized:

mov a 5
inc a
dec a
dec a
jnz a -1
inc a
The above code will:

set register a to 5,
increase its value by 1,
decrease its value by 2,
then decrease its value until it is zero (jnz a -1 jumps to the previous instruction if a is not zero)
and then increase its value by 1, leaving register a at 1
So, the function should return:

map[string]int{"a": 1}
*/

package kata

import (
	"strings"
	"strconv"
)

func SimpleAssembler (program []string) map[string]int {
	registers := make(map[string]int)

	for i := 0; i < len(program); i++ {
		operation := program[i]
		vals := strings.Split(operation, " ")
		val1 := vals[0]
		val2 := vals[1]

		if val1 == "mov" {
			newVal := ReturnVal(vals[2], registers)
			registers[val2] = newVal
		} else if val1 == "jnz" {
			a := ReturnVal(val2, registers)
			b, _ := strconv.Atoi(vals[2])
			if a != 0 {
				i += b - 1
			}
		} else if val1 == "inc" {
			registers[val2]++
		} else {
			registers[val2]--
		}
	}
	return registers
}

func ReturnVal (input string, registers map[string]int) int {
	if value, error := strconv.Atoi(input); error == nil {
		return value
	}
	return registers[input]
}
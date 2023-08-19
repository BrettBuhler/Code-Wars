/*
Write a function that accepts a string consisting only of ASCII letters and space(s) and returns that string in block letters of 5 characters width and 7 characters height, with one space between characters.

The string should be formatted in a way that when passed to TypeScripts' console.log() function shows the desired output (see below for example).

There's a preloaded 'map' called alpha which you can use. Keys are lower case letters and the space.

The block letters should consist of corresponding capital letters.
It's irrelevant whether input consists of lower or upper case letters.
Any leading and/or trailing spaces in input should be ignored.
Empty strings or such containing only spaces should return an empty string.
The remaining spaces (between letters and/or words) are to be treated as any other character. This means that there will be six spaces in output for a space in input, or a multiple of six, if there were more spaces - plus the one from preceding character!
Trailing spaces should be removed in the resulting string.
console.log(blockPrint("heLLo WorLD"));
should result in an output that looks like this:

H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD
H   H E     L     L     O   O       W   W O   O R   R L     D   D
H   H E     L     L     O   O       W   W O   O R   R L     D   D
HHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D
H   H E     L     L     O   O       W W W O   O R R   L     D   D
H   H E     L     L     O   O       W W W O   O R  R  L     D   D
H   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD
As most of the characters can be printed in many different ways (think of Q, F or W), here is what they're expected to look like:
*/

export function blockPrint(input: string): string {
    input = input.trimStart()
    if (input.length == 0) return ""
    let response = ''
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < input.length; j++) {
            response += alpha[input[j].toLowerCase()][i]
            if (j != input.length - 1) {
                response += ' '
            } else {
                response = response.trimEnd()
            }
        }
        if (i != 6) {
            response += '\n'
        }
    }
    return response
}
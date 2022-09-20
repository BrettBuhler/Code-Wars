"""
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
"""
#MY SOLUTION
def accum(s):
    my_str = ""
    for i in range(0, len(s)):
        my_str += f"-{s[i].upper()}{s[i].lower() * i}"
    return my_str[1:]
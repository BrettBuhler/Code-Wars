/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.
*/
export function reverseWords(str: string): string {
    return str.split(" ").reverse().join(" ")
  }
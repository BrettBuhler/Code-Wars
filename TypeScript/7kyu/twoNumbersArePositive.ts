/**
 * Task:
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
two_are_positive(2, 4, -3) == True
two_are_positive(-4, 6, 8) == True
two_are_positive(4, -6, 9) == True
two_are_positive(-4, 6, 0) == False
two_are_positive(4, 6, 10) == False
two_are_positive(-14, -3, -4) == False
 */

export const twoArePositive = (a: number, b: number, c: number): boolean => {
    const isPositive = (num: number): number => {
        return num > 0 ? 1 : 0
    }
    return isPositive(a) + isPositive(b) + isPositive(c) === 2 ? true : false
}
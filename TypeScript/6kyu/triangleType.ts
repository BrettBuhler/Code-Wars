/*
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).


Acute

Right

Obtuse
Examples:
(2, 4, 6) ---> return 0 (Not triangle)
(8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
(3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
*/
export const triangleType = (a: number, b: number, c: number): number => {
    if (isTriangle(a, b ,c)) {
        return whatTriangle(a, b, c)
    }
    return 0
}

const isTriangle = (a: number, b: number, c: number): boolean => {
    return ((a + b) > c && (b + c) > a) && (c + a) > b
}

const whatTriangle = (a: number, b: number, c: number): number => {
    let long = a > b && a > c ? a : b > c && b > a ? b : c
    let short: number | number[] = long === a ? [b, c] : long === b ? [a, c] : [a,b]
    long = Math.pow(long, 2)
    short = Math.pow(short[0], 2) + Math.pow(short[1], 2)
    if (long == short) {
        return 2
    } if (long > short) {
        return 3
    }
    return 1
}
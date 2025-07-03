/*A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!*/
const equableTriangle = (a, b, c) => {
    const s = (a+b+c)/2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)) === 2 * s
}

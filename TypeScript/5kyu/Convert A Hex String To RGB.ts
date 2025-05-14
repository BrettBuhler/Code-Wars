export function hexStringToRGB(hexString: string): { r: number, g: number, b: number } {
    const red = parseInt(hexString.slice(1, 3), 16)
    const green = parseInt(hexString.slice(3, 5), 16)
    const blue = parseInt(hexString.slice(5, 7), 16)
    return { r: red, g: green, b: blue }
}
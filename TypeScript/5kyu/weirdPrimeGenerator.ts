export const gcd = (a: number, b: number): number => {
    while (b !== 0) {
        let temp:number = b
        b = a % b
        a = temp
    }
    return a
}

export const seq =  (n: number): number => {
    if (n === 1) return 7
    return seq(n - 1) + gcd(n, seq(n - 1))
}

export const seqArr = (n: number): number[] => {
    const arr:number[] = []
    for (let i = n; i > 0; i--) {
        arr.unshift(seq(i))
    }
    return arr.map((n:any,i:any)=>i < arr.length - 1 ? arr[i+1] - n : 0)
}

export const countOnes = (n: number):number => {
    return seqArr(n).filter((x: number) => x === 1).length + 1
}

export const maxPn = (n: number):number => {
    const arr = seqArr(n)
    console.log(`n=${n}`, arr)
  return Math.max(...arr)
}

export const anOverAverage = (n: number):number => {
  return n
}

console.log('seqArr', seqArr(7))
console.log('count1', countOnes(7))
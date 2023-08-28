export const PrimeGrasshoper = (arr: number[]): number => {
    for (let i = 0; i < arr.length){
        
    }
    return 0
}

const isPrimeJump = (start: number, stop: number) => {
    let primeIndex = 0
    while (PRIMES[primeIndex] <= stop - start) {
        if (start + PRIMES[primeIndex] === stop){
            return true
        }
        primeIndex++
    }
    return false
}
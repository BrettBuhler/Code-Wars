const convert = (s) => {
    const smallestPrimeFactor = (n, f) => {
        let smallestFactor = f
        if (smallestFactor >= n) return 1
        while(n % smallestFactor != 0){
            smallestFactor++
        }
        if (isPrime(smallestFactor)){
            return smallestFactor
        }
        return smallestPrimeFactor(n, smallestFactor)
    }
    const isPrime = (n) => {
        if (n <= 1) return false
        if (n <= 3) return true
        if (n % 2 === 0 || n % 3 === 0) return false
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false
        }
        return true
    }
    const getNum = (s) => {
        if (s.length === 0) return s
        let num = 0
        for (let i = 0; i < s.length; i++){
            if (s[i] === s[0]){
                num++
            } else {
                break
            }
        }
        return `${num}` + getNum(s.substring(num, s.length))
    }
    let number = parseInt(getNum(s))
    if (isPrime(number)) return number
    while(number / )
}

console.log(convert('!!!???'))
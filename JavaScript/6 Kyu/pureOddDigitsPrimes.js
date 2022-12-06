const onlyOddDigPrimes = (n) => {
    let count = 0
    let large = 0
    for (let i = n-1; i > 0; i--){
        if (isOddPrime(i)){
            if (large == 0){
                large = i
            }
            count++
        }
    }
    while(true){
        n++
        if(isOddPrime(n)){
            return([count - 1, large, n])
        }
    }
}

const isOddPrime = (n) => {
    let oddDig = n.toString().split('').map(x=>parseInt(x)%2!==0).reduce((a,b)=>b == true && a == true ? true : false)
    if (!oddDig) return false
    for (let i = 2; i <= n/2; i++){
        if (n % i == 0) return false
    }
    return true
}

console.log(onlyOddDigPrimes(40))
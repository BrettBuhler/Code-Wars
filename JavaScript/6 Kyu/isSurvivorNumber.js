const survivor = (n) => {
    let sqrt = Math.ceil(Math.sqrt(n))
    let num = joshuaZucker(sqrt)
    while (num <= n){
        if (num == n) return true
        sqrt++
        num = joshuaZucker(sqrt)
    }
    return false
}

let joshuaZucker = (n) => {
    let x = n
    let num = n ** 2
    while (x > 1){
        if (num % x == 0){
            x--
            num--
        } else {
            num--
        }
    }
    return num
}

console.log(survivor(289))
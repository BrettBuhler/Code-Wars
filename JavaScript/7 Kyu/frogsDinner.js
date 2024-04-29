const frogContest = (n) => {
    const sumNum = (n) => {
        let returnNum = 0
        while (n > 0) {
            returnNum += n
            n--
        }
        return returnNum
    }
    const chris = sumNum(n)
    const tom = sumNum(Math.floor(chris/2))
    const cat = (sumNum(chris + tom))
    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`
}
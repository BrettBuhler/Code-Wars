const solution = (s, t) => {
    //Math.min(speed / 3 + 1, (time + 1) / 2)
    if (s === 1){
        return t + 1
    }
    let str = ''
    let sCount = 0
    for (let i = 0; i < t; i++){
        if (i % 2 === 0){
            if (sCount >= s - 1){
                str += 'r'
            } else {
                str += 's'
                sCount++
            }
        } else {
            str += 'r'
        }
    }
    console.log(str.split('').reverse().length)
    return str.split('').reverse().reduce((a,b)=>{
        if (b === 'r'){
            return a + s
        } else {
            s--
            return a + (2 * (s + 1))
        }
    },0)
}


console.log(solution(56,141))

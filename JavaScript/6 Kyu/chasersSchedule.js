/*
const solution = (s,t) => {
    let runs = []
    for (let i = 0; i < t; i++){
        if (runs.length === 0){
            runs.push('1')
            runs.push('2')
        } else {
            let newRuns = []
            for (let j = 0; j < runs.length; j++){
                if (runs[j][runs[j].length-1] === '2'){
                    runs[j] += '3'
                } else {
                    newRuns.push(runs[j] + '2')
                    runs[j] += '1'
                }
            }
            runs = runs.concat(newRuns)
        }
    }
    return runs.map(x=>{
        let distance = 0
        let speed = s
        for (let i = 0; i < x.length; i++){
            if (x[i] == '2'){
                distance += (2 * speed)
                speed--
            } else {
                distance += speed
            }
        }
        return distance
    }).sort()[0]
}
*/

const solution = (speed, time) => Math.min(speed / 3 + 1, (time + 1) / 2)



console.log(solution(2,4))
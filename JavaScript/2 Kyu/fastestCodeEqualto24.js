const equalTo24 = (a, b, c, d) =>{
    const possiblePermutations =  getPermute([a,b,c,d])
    const operations = {
        0: '+',
        1: '-',
        2: '*',
        3: '/'
    }
    for (let i = 0; i < possiblePermutations.length; i++){
        for (let key1 in operations) {
            for (let key2 in operations) {
                for (let key3 in operations){
                    const answer = isNum(
                        possiblePermutations[i][0],
                        possiblePermutations[i][1],
                        possiblePermutations[i][2],
                        possiblePermutations[i][3],
                        operations[key1],
                        operations[key2],
                        operations[key3],
                        24)
                    if (answer) return answer
                }
            }
        }
    }
    return 'It\'s not possible!'
}

const isNum = (a,b,c,d,o1,o2,o3,num) => {
    if (eval(`((${a}${o1}${b})${o2}${c})${o3}${d}`) == num) {
        return `((${a}${o1}${b})${o2}${c})${o3}${d}`
    } else if (eval(`${a}${o1}(${b}${o2}(${c}${o3}${d}))`) == num){
        return `${a}${o1}(${b}${o2}(${c}${o3}${d}))`
    } else if (eval(`(${a}${o1}${b})${o2}(${c}${o3}${d})`) == num){
        return `(${a}${o1}${b})${o2}(${c}${o3}${d})`
    } else if (eval(`${a}${o1}(${b}${o2}${c}${o3}${d})`) == num){
        return `${a}${o1}(${b}${o2}${c}${o3}${d})`
    } else if (eval(`${a}${o1}(${b}${o2}${c}${o3}${d})`) == num){
        return `${a}${o1}(${b}${o2}${c}${o3}${d})`
    } else if (eval(`(${a}${o1}${b})${o2}(${c}${o3}${d})`) == num) {
        return `(${a}${o1}${b})${o2}(${c}${o3}${d})`
    } else {
        return false
    }
}

const getPermute = (arr) => {
    if (arr.length <= 1) return [arr]
    const operations = {
        0: '+',
        1: '-',
        2: '*',
        3: '/'
    }
    let res = []
    for (let i = 0; i < arr.length; i++){
        let remainder = arr.slice(0,i).concat(arr.slice(i+1))
        let permute = getPermute(remainder)
        for (let j = 0; j < permute.length; j++){
            let last = [arr[i], ...permute[j]]
            res.push([arr[i], ...permute[j]])
            
        }
    }
    return res
}

console.log(equalTo24(9,1,3,11))
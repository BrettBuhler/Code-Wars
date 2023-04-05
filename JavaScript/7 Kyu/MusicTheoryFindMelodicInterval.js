const getInterval = (a, b) => {
    let large
    if (parseInt(a[1]) >= parseInt(b[1])) {
        large = parseInt(a[1])
    } else {
        large = parseInt(b[1])
    }
    let arr = makeArr(large)
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) + 1
}

const makeArr = (num) => {
    const abc = "CDEFGAB"
    let arr = []
    for (let i = 0; i <= num; i++){
        if (i === 0){
            arr.push('A0')
            arr.push('B0')
        } else {
            for (let j = 0; j < 7; j++){
                arr.push(`${abc[j]}${i}`)
            }
        }
    }
    return arr
}

console.log(getInterval('G3', 'G4'))
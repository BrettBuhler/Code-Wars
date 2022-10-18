const rotate = (arr, str) => {
    const cWise = (arr) => {
        let rotatedArr = []
        for (let i in arr){
            rotatedArr.push([])
            for (let j in arr){
                rotatedArr[i].unshift(arr[j][i])
            }
        }
        return rotatedArr
    }
    const counterCWise = (arr) => {
        let rotatedArr = []
        for (let i = arr.length - 1; i >= 0; i--){
            rotatedArr.push([])
            for (let j in arr){
                rotatedArr[rotatedArr.length - 1].push(arr[j][i])
            }
        }
        return rotatedArr
    }
    return str == 'counter-clockwise' ? counterCWise(arr) : cWise(arr)
}

console.log(rotate([[1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]], 'counter-clockwise'))
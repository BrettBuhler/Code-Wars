/*
Description
Let's play the game "Whac-A-Mole". Give you an 2D array:

[
[1,1,2,2],
[3,3,4,4],
[4,8,8,8]
]
The meaning of numbers in the array is that the mole will disappear after n seconds(0 means no mole). You are holding a big hammer and every second can hit two moles. Please calculate the maximum number of moles you can hit.

In accordance with the above example:

[
[1,1,2,2],
[3,3,4,4],
[4,8,8,8]
]

After 1 second(hit 2, total=2)
[
[x,x,1,1],
[2,2,3,3],
[3,7,7,7]
]

After 2 seconds(hit 2, total=4)
[
[x,x,x,x],
[1,1,2,2],
[2,6,6,6]
]

After 3 seconds(hit 2, total=6)
[
[x,x,x,x],
[x,x,1,1],
[1,5,5,5]
]

After 4 seconds(hit 2, total=8)
[
[x,x,x,x],
[x,x,x,x],
[0,4,4,4]
]

After 5 seconds(hit 2, total=10)
[
[x,x,x,x],
[x,x,x,x],
[0,x,x,3]
]

After 6 seconds(hit 1, total=11)
[
[x,x,x,x],
[x,x,x,x],
[0,x,x,x]
]

We hit a total of 11 moles.
Another example:

[
[6,4,1,1],
[4,4,4,4],
[1,2,3,3]
]

After 1 second(hit 2, total=2)
[
[5,3,x,x],
[3,3,3,3],
[0,1,2,2]
]

After 2 second(hit 2, total=4)
[
[4,2,x,x],
[2,2,2,2],
[0,x,x,1]
]

After 3 second(hit 2, total=6)
[
[3,x,x,x],
[1,1,1,1],
[0,x,x,x]
]

After 4 second(hit 2, total=8)
[
[2,x,x,x],
[x,x,0,0],
[0,x,x,x]
]


After 5 second(hit 1, total=9)
[
[x,x,x,x],
[x,x,0,0],
[0,x,x,x]
]

We hit a total of 9 moles.
OK, that's all. I guess this is a 6kyu kata. If you agree, please rank it as 6kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[

Task
Complete function whacAMole that accepts a argument arr, return the maximum number of moles you can hit.
*/
const whacAMole = (arr) => {
    let hits = 0
    while (flat(arr).reduce((a,b)=>a+b) > 0) {
        let arrMins = findMin(arr)
        arrMins = arrMins.filter(x=>x.length > 0)
        arrMins.map(x=>{
            arr[x[0]][x[1]] = 0
            hits++
        })
        arr = arr.map(e=>e.map(y=> y > 0 ? y-1 : 0))
    }
    return hits
}
const flat = (arr)=>{
    flatArr = []
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            flatArr.push(arr[i][j])
        }
    }
    return flatArr
}

const findMin = (arr) => {
    let min1 = 100
    let min2 =  100
    let index = [[],[]]
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if ((arr[i][j] < min1 || arr[i][j] < min2) && arr[i][j] > 0){
                if (arr[i][j] < min1 && arr[i][j] >= min2){
                    min1 = arr[i][j]
                    index[0] = [i,j]
                } else if (arr[i][j] < min2 && arr[i][j] >= min1){
                    min2 = arr[i][j]
                    index[1] = [i,j]
                } else {
                    min1 = arr[i][j]
                    index[0] = [i,j]
                }
            }
        }
    }
    return index
}
const a1 = [
    [6,4,1,1],
[4,4,4,4],
[1,2,3,3]]

console.log(whacAMole(a1))
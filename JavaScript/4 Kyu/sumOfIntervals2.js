const sumIntervals = (intervals) => {
    let count = 0
    let min = intervals[0][0]
    let max = intervals[0][1]
    for (let i = 1; i < intervals.length; i++){
        if (intervals[i][0] < min) min = intervals[i][0]
        if (intervals[i][1] > max) max = intervals[i][1]
    }
    let array = Array.from({ length: (max - min) / 1 + 1}, (_, i)=> min + i * 1)
    console.log(array.length)
    for (let i = 0; i < intervals.length; i++){
        let i0 = intervals[i][0]
        let i1 = intervals[i][1]
        if (array.indexOf(i0) != -1 && array.indexOf(i1) != -1){
            for (let j = array.indexOf(i0); j <= array.indexOf(i1); j++){
                if (array[j] != 'x'){
                    array[j] = 'x'
                }
            }
        } else if (array.indexOf(i0) != -1){
            for (let j = array.indexOf(i0); j < array.indexOf(i0) + Math.abs(intervals[i][1] - intervals[i][0]); j++){
                if (array[j] != 'x'){
                    array[j] = 'x'
                }
            }
        } else if (array.indexOf(i1) != -1){
            for (let j = array.indexOf(i1); j > array.indexOf(i1) - Math.abs(intervals[i][1] - intervals[i][0]); j--){
                if (array[j] != 'x'){
                    array[j] = 'x'
                }
            }
        }
    }
    return array.filter(x=>x==='x').length
}


console.log(sumIntervals( [
    [ 19, 24 ],
    [ -1, 8 ],
    [ 7, 10 ],
    [ -1, 1 ],
    [ -10, -9 ],
    [ 5, 12 ],
    [ -15, -6 ]
 ] ))
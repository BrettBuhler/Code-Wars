const riders = (stations) => {
    let distance = 0
    let riders = 1
    for (let i = 0; i < stations.length; i++){
            if (distance + stations[i] <= 100){
                distance += stations[i]
            } else {
                riders++
                distance = stations[i]
            }
    }
    return riders
}

console.log(riders([32,32,29,15,19,24,17,42]))
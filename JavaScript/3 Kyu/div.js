const divideStrings = (a, b) => {
    let c = ''
    let index = 0
    let temp = a[index] - '0'
    while (temp < b){
        temp = (temp * 10 + (a[index + 1]).charCodeAt(0) - ('0').charCodeAt(0))
        index ++
    }
    index ++
    while(a.length > index){
        c += String.fromCharCode(Math.floor(temp / b) + ('0').charCodeAt(0))
        temp = ((temp % b) * 10 + (a[index]).charCodeAt(0) - ('0').charAt(0))
        index ++
    }
    c += String.fromCharCode(Math.floor(temp / b) + ('0').charAt(0))
    if (c.length == 0){
        return "0"
    }
    return c
}
console.log (divideStrings("13344","2"))
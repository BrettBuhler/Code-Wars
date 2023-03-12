/*
There are many ways to order those expressions. In this kata we'll use this approach:

Cantor pairing function image
So sequence is:

1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4 ...
Your task is to return nth element of this sequence.

Input: n - positive integer (max 268435455)

Output: string - nth expression of sequence - 'a/b' where a and b are integers.
*/
/*
I tried a brute force method that made cantor's full sequence. This method worked, however it was not efficient enough.
const cantor = (n) =>{
    let bottom = [1]
    let top = [1]
    let topMax = 3
    let bottomMax = 4
    let tNum = 1
    let bNum = 2
    let topBool = true
    let bottomBool = false
    while (top.length < n){
        if (topBool){
            if (tNum < topMax){
                top.push(tNum)
                tNum++
            } else {
                top.push(tNum)
                topBool = false
                tNum --
                topMax += 2
            }
        } else {
            if (tNum > 1){
                top.push(tNum)
                tNum--
            } else {
                top.push(tNum)
                topBool = true
            }
        }
        if (bottomBool){
            if (bNum < bottomMax){
                bottom.push(bNum)
                bNum++
            } else {
                bottom.push(bNum)
                bottomBool = false
                bNum--
                bottomMax+=2
            }
        } else {
            if (bNum > 1){
                bottom.push(bNum)
                bNum--
            } else {
                bottom.push(bNum)
                bottomBool = true
            }
        }
}
    return `${top[n-1]}/${bottom[n-1]}`
}
*/
// MY next approach only caluclated the number of elements in each row of cantors sequence where the total number of elements was less than
// or equal to n. Then I determined what n was in relation to is possition on the row.
const cantor = (n) => {
    let sum = 0
    let count = 1
    while (sum < n){
        sum += count
        count++
    }
    if (count % 2 != 0){
        let top = Math.abs((1 + Math.abs(n - sum)) - count)
        let bottom = 1 + Math.abs(n - sum)
        return top.toString() + '/' + bottom.toString()
    } else {
        let top = 1 + Math.abs(n - sum)
        let bottom = Math.abs((1 + Math.abs(n - sum)) - count)
        return top.toString() + '/' + bottom.toString()
    }
}
console.log(cantor(14))
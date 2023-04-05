/*
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

n=7, k=3 => means 7 people in a circle
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
*/

const josephusSurvivor = (n, k) => {
    let items = []
    for (let i = 0; i < n; i++){
        items.push(i+1)
    }
    let array = []
    while (items.length > 1){
        if (items.length >= k){
            array.push(items[k-1])
            items = items.slice(k).concat(items.slice(0,k-1))
        } else {
            let i = k
            while (i > items.length){
                i -= items.length
            }
            array.push(items[i-1])
            items = items.slice(i).concat(items.slice(0,i-1))
        }
    }
    return items[0]
}

console.log(josephusSurvivor(11,19))
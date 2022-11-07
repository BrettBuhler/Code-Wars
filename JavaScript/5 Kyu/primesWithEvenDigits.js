/*
Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

Naming f(), the function that gives that prime, the above case and others will be like the following below.

f(1000) ---> 887 (even digits: 8, 8)

f(1210) ---> 1201 (even digits: 2, 0)

f(10000) ---> 8887

f(500) ---> 487

f(487) ---> 467
Features of the random tests:

Number of tests = 28
1000 <= n <= 5000000
*/
// MY SOLUTION

const f = (n) => {
    n--
   let arr = n.toString().split('').map(x=>parseInt(x))
   let len = arr[0] == 1 ? arr.length - 2 : arr.length - 1
   if (n % 2 == 0){
    n--
   }
   while (n > 0){
    if (evenCount(n) == len){
        if (isPrime(n)){
            return n
        }
    }
    n -= 2
   }
   return null
}

const isPrime = (n) => {
    for (let i = 2; i <= Math.floor(n/2); i++){
        if (n % i == 0){
            return false
        }
    }
    return true
}

const evenCount = (n) => {
    n = n.toString().split('').map(x=> parseInt(x))
    let returnNum = 0
    for (let i of n){
        if (i % 2 == 0){
            returnNum++
        }
    }
    return returnNum
}

console.log(f(1000))
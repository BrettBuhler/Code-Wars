/*
This kata is the part two version of the Find X kata, if you haven't solved it you should try solving it, it's pretty easy.

In this version you're given the following function

function findX(n) {
      if (n == 0) return 0;
      let x = 0;
      for (let i=1; i<=n; ++i)
            x += findX(i-1) + 3*i;
      return x;
}
Since this computation is exponential, it gets very slow quickly as n increases, your task is to optimize the function so it works well for large numbers.

findX(2) //=> 12
findX(3) //=> 33
findX(5) //=> 171
The result gets pretty large even for small inputs, so you should return the result % (109+7)

Input Range
1 <= n <= 106
*/
// MY SOLUTION
findX=(n)=>n===1?3:parseInt(BigInt(3)*((BigInt(n+1)*BigInt(-1))+(BigInt(2)**BigInt(n+1)-BigInt(1))))

console.log(findY(3))
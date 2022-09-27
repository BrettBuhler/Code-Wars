/*
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
16+1821426+39515122+811103\large \begin{array}{lll} & 1 & 6 \\ + & 1 & 8 \\ \hline & 2 & 1 4 \\ \end{array} \qquad \large \begin{array}{lll} & 2 & 6 \\ + & 3 & 9 \\ \hline & 5 & 15 \\ \end{array} \qquad \large \begin{array}{lll} & 1 & 2 & 2 \\ + & & 8 & 1 \\ \hline & 1 & 10 & 3 \\ \end{array} 
+
​
  
1
1
2
​
  
6
8
14
​
 
​
  
+
​
  
2
3
5
​
  
6
9
15
​
 
​
  
+
​
  
1
1
​
  
2
8
10
​
  
2
1
3
​
 
​

*/

//MY SOLUTION
function add(num1, num2) {
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')
    if (num2.length > num1.length){
      let temp = num2
      num2 = num1
      num1 = temp
    }
    while (num1.length != num2.length){
      num2.unshift('0')
    }
    return parseInt(num1.map((x,i) => Number(x) + Number(num2[i])).join(''))
    }
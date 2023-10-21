/*
i is the imaginary unit, it is defined by 
�
²
=
−
1
i²=−1, therefore it is a solution to 
�
²
+
1
=
0
x²+1=0.

Your Task
Complete the function pofi that returns 
�
i to the power of a given non-negative integer in its simplest form, as a string (answer may contain 
�
i).
*/
const pofi = (n) => {
    const helper = (str) => {
      switch (str) {
          case '1':
            return 'i'
          case 'i':
            return '-1'
          case '-1':
            return '-i'
          case '-i':
            return '1'
      }
    }
    let I = '-i'
    for (let i = 0; i <= n; i++){
      I = helper(I)
    }
    return I
  }
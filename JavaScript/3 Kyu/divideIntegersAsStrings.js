const divideStrings = (a , b) =>{
    const subStrings = (a, b) => {
      if (a.length < b.length){
        return false
      } else if (a.length === b.length){
        for (let i = 0; i < a.length; i++){
          if (a[i] === b[i]){      
          } else if (a[i] < b[i]){
            return false
          } else {
            break
          }
        }
      }
      let equalLength = false
      while (!equalLength){
        if (a.length === b.length){
            equalLength = true
        } else {
            b = "0"+ b
        }
      }
      let temp =[]
      for (let i = 0; i < a.length; i++){
        temp.push((Number(a[i]) - Number(b[i])))
      }
      temp.reverse()
      for (let i = 0; i < temp.length; i++){
        if (temp[i] < 0){
            temp[i] += 10
            temp[i+1] -= 1
        }
      }
      return Number(temp.reverse().join('')).toString()
    }
    let count = 0;
    let lastNum
   
    while(true){
        lastNum = a
        a = subStrings(a, b)
        if (a){
            count++
        } else {
            break
        }
    }
    return([count.toString(),lastNum])
  }

  console.log(divideStrings('111','33'))
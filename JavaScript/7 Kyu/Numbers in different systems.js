function sysNums(n, sys) {
    function isOnlyDigits(str) {
      return /^\d+$/.test(str);
    }
    if (sys === 2){
      return Number(n.toString(sys))
    } else if (sys === 8){
      return parseInt(n.toString(sys))
    } else if (sys === 16) {
      if (n === 0){
        return n
      }
      const base16 = n.toString(sys)
      if (isOnlyDigits(base16)){
        return parseInt(base16)
      } else {
        return base16
      }
    } else {
      return n
    }
  }

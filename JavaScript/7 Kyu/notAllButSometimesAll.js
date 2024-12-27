function remove(str, what) {
    let returnStr = ""
    for(let i = 0; i < str.length; i++) {
      if(what[str[i]] > 0) {
        what[str[i]]--
      } else {
        returnStr += str[i]
      }
    }
    return returnStr
  }
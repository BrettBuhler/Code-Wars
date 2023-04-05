const longestPalindrome = (s) => {
    if (s == ''){
        return 0
    }
    if (s.length == 1){
        return 1
    }
    if (s.length == 2){
        if (s[0] == s[1]){
            return 2
        }
        return 0
    }
    if (s.length == 3){
        if (s[1] == s[2] || s[0] == s[1]){
            return 2
        } else if (s[0] == s[2]){
            return 3
        }
        return 0
    }
    for (let i = s.length; i > 2; i--){
        for (let j = 0; j <= s.length - i; j++){
            let subString = s.substr(j,i)
            let reversed = subString.split('').reduce((a,b)=>b+a)
            if (subString == reversed){
                return subString.length
            }
        }
    }
    return 1
}

console.log(longestPalindrome('abcdefghba'))
/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

const decipherThis = (str) => {
    return str.split(' ').map(x=>decode(x)).join(' ')
}

const decode = (str) => {
    if (!isNaN(str)){
        return String.fromCharCode(str)
    }
    for (let i = 0; i < str.length; i++){
        if (isNaN(str[i])){
            if (str.substring(i, str.length).length == 1) return String.fromCharCode(str.substring(0,i)) + str[str.length - 1]
            return String.fromCharCode(str.substring(0,i)) + str[str.length - 1] + str.substring(i+1, str.length - 1) + str[i]
        }
    }
    return str 
}

console.log(decode('72fdadj'))
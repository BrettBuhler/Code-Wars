/*
In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

const mix = (s1, s2) => {
    s1 = filterString(s1)
    s2 = filterString(s2)
    let chars = {}
    let arr = []
    for (let i = 0; i < s1.length; i++){
        if (chars[s1[i]]){
            chars[s1[i]][1]++
        } else {
            chars[s1[i]] = {1:1, 2:0}
        }
    }
    for (let i = 0; i <s2.length; i++){
        if (chars[s2[i]]){
            chars[s2[i]][2]++
        } else {
            chars[s2[i]] = {1:0, 2:1}
        }
    }
    for (let item in chars){
        let one = chars[item][1]
        let two = chars[item][2]
        if (one > 1 || two > 1){
            if (one > two){
                arr.push('1:' + `${item}`.repeat(one))
            } else if (two > one){
                arr.push('2:' + `${item}`.repeat(two))
            } else {
                arr.push('=:' + `${item}`.repeat(one))
            }
        }
    }
    arr = arr.sort((a,b)=>{
        if (a.length < b.length){
            return 1
        } else if (b.length < a.length){
            return -1
        } else {
            let pos = ['1','2','=']
            if (pos.indexOf(a[0]) < pos.indexOf(b[0])){
                return -1
            } else if (pos.indexOf(b[0]) < pos.indexOf(a[0])){
                return 1
            } else {
                if (a[3] < b[3]){
                    return -1
                } else if (a[3] < b[3]){
                    return 1
                } else {
                    return 0
                }
            }
        }
    })
    return arr.join('/')
}

const filterString = (str) => {
    str = str.split('')
    return str.filter(x=>'abcdefghijklmnopqrstuvwxyz'.includes(x)).join('')
}

console.log(mix('Are they here', 'yes, they are here'))
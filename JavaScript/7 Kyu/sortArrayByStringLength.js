const sortByLength = (array) => array.sort((a,b) => a.length - b.length)

console.log('sorted ["abc","ab","a"]', sortByLength(["abc","ab","a"]))
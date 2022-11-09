/*
verview
We often use smiley faces in correspondence with other people. They allow us to quickly show our reaction to the person(s) we are talking to.

But one day you wanted to make your correspondence more joyful. So today you have the opportunity to make it happen.

Task:
In this kata, your task will be to replace sad emoticons with funny ones.

The emoticons, will be represented from:

Eyes: marked as :, ; or =
Nose (optional): marked as - or ~
Mouth: marked as ( or [
*/

const smile = (str) => {
    const regex = /[:|;|=][-|~]?[(|[]/g
    let isFrown = str.match(regex)
    if (!isFrown) return str
    for (let i of isFrown){
        if (i.length == 2){
            let mouth = i[1] == '(' ? ')' : ']'
            str = str.replace(i, i[0] + mouth)
        } else {
            let mouth = i[2] == '(' ? ')' : ']'
            str = str.replace(i, i.slice(0,2) + mouth)
        }
    }
    return str
}

console.log(smile('dlfjd  ;[ fj :~('))
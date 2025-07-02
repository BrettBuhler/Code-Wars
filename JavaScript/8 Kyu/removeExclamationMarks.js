const removeExclamationMarks=(s)=>{
    return s.replaceAll("!","");
}


let my_str = "remove! me! from! this!"
console.log("This is the new str:", removeExclamationMarks(my_str))

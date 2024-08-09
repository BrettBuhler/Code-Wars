const findNumber = (start, stop, string) => {
    const missing_numbers = []
    const sorted_string = string.split("").sort().join("")

    for (let i = start; i <= stop; i++){
        let number_array = []
        for (let j = start; j <= stop; j++){
            if (j != i){
                number_array.push(j)
            }
        }
        number_array = number_array.join("").split()

        number_array = number_array.sort()
        number_array = number_array.join("")
        if (sorted_string == number_array){
            missing_numbers.push(i)
        }
        
    }
    return missing_numbers
}
const test = findNumber(1,21,"2198765123416171890101112131415")
console.log(test)
/*
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
*/
const productArray = (numbers) => {
    let arr = []
    for (let i = 0; i < numbers.length; i++){
        let temp = numbers.slice(0,i).concat(numbers.slice(i+1))
        arr.push(temp)
    }
    return arr.map(x=>x.reduce((a,b)=>a*b,1))
}

console.log(productArray([12,20]))
/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/
// MY SOLUTION
Math.round = (num) => {
    return (num % 1) >= 0.5 ? Math.ceil(num) : Math.floor(num)
}

Math.ceil = (num) => {
    return num % 1 == 0 ? num : num - (num % 1) + 1
}

Math.floor = (num) => {
    return num % 1 == 0 ? num : num - (num % 1)
}
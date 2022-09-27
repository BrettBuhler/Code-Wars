/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/
// SOLUTION
function zero(a) {
    if (a){
      return math(`0${a}`)
    }
    return '0'
  }
  function one(a) {
      if (a){
      return math(`1${a}`)
    }
    return '1'
  }
  function two(a) {
      if (a){
      return math(`2${a}`)
    }
    return '2'
  }
  function three(a) {
      if (a){
      return math(`3${a}`)
    }
    return '3'
  }
  function four(a) {
    if (a){
      return math(`4${a}`)
    }
    return '4'
  }
  function five(a) {
    if (a){
      return math(`5${a}`)
    }
    return '5'
  }
  function six(a) {
    if (a){
      return math(`6${a}`)
    }
    return '6'
  }
  function seven(a) {
    if (a){
      return math(`7${a}`)
    } else {
      return '7'
    }
  }
  function eight(a) {
    if (a){
      return math(`8${a}`)
    }
    return '8'
  }
  function nine(a) {
    if (a){
      return math(`9${a}`)
    }
    return '9'
  }
  const math = (s) => {
    console.log(s)
    let a = parseInt(s[0])
    let b = parseInt(s[2])
    let c = s[1]
    switch(c){
        case '+':
        return a + b
        case '-':
        return a - b
        case '*':
        return a * b
        case '/':
        return Math.floor(a/b)
    }
  }
  function plus(a) {return '+'+a}
  function minus(a) {return '-'+a}
  function times(a) {return '*'+a}
  function dividedBy(a) {return '/'+a}
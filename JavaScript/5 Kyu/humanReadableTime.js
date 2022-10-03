/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
// MY SOLUTION

const humanReadable = (seconds) => {
    //Format an int between 0 and 99 into a string with a leading 0 if the int is less than 10
    const formatString = (str) => str.toString().length === 1 ? `0${str}` : `${str}`
    
    //convert seconds into hours, minutes and seconds
    let sec = seconds % 60
    seconds -= sec
    let min = (seconds / 60) % 60
    seconds -= min*60
    let hours = (seconds/60/60)
    
    //call the formatString function on seconds, minutes, and hours, place colons between, and return a single string
    return `${formatString(hours)}:${formatString(min)}:${formatString(sec)}`
  }
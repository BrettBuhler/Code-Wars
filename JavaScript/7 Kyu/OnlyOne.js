/*
 * Task: Write a function which returns True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

Input	Expected Output
No flags passed in	False
True, False, False	True
True, False, False, True	False
False, False, False, False	False
Algorithms*/
function onlyOne(...args) {
  let response = false
  for (let i = 0; i < args.length; i++){
    if (args[i] === true && response !== true) {
      response = true
    } else if (args[i] === true) {
      return false
    }
  }
  return response
}

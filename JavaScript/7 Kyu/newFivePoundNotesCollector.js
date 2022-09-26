/*
The new £5 notes have been recently released in the UK and they've certainly became a sensation! Even those of us who haven't been carrying any cash around for a while, having given in to the convenience of cards, suddenly like to have some of these in their purses and pockets. But how many of them could you get with what's left from your salary after paying all bills? The programme that you're about to write will count this for you!

Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.

£££ GOOD LUCK! £££
*/
// MY SOLUTION

function getNewNotes(salary,bills){
    if (bills == []){
      bills = 0
    } else {
      bills = bills.reduce((a,b) => a + b, 0)
    }
    let x = Math.floor((salary - bills)/5)
    if (x > 0){
      return x
    }
    return 0
  }
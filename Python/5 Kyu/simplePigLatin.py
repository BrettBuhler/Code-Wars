"""
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !
"""


#MY SOLUTION
def pig_it(text):
    letters = "abcdefghijklmnopqrstuvwxyz"
    return_list = text.split(' ')
    text_list = []
    temp = ""
    tempWord = ""
    for word in return_list:
        if word[0].lower() in letters:
            temp = word[0]
            tempWord = word[1:]
            tempWord += temp + "ay"
            text_list.append(tempWord)
        else:
            text_list.append(word)
    return (' ').join(text_list)
            
"""
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
"""
#MY SOLUTION
def find_short(s):
    # your code here
    words = s.split(" ")
    l = len(words[0])
    for word in words:
        if len(word) < l:
            l = len(word)
    return l # l: shortest word length
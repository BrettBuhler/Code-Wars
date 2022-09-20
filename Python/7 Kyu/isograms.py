"""
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
"""
#MY SOLUTION
def is_isogram(string):
    my_list = []
    for char in string:
        if char.lower() not in my_list:
            my_list.append(char.lower())
    if len(string) == len(my_list):
        return True
    return False
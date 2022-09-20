"""
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
"""
#MY SOLUTION
def unique_in_order(iterable):
    return_list = []
    last_item = "long"
    for item in iterable:
        if last_item != item:
            return_list.append(item)
        last_item = item
    return return_list
# Task
# Write a function that returns both the minimum and maximum number of the given list/array.
"""What I want to do is get the array, find the largest number and push that into the empy array
then get the smallest number from the lst array and push that into the empy array.
"""


def min_max(lst):
    mn = []

    a = sorted(lst).pop(0)
    b = sorted(lst).pop(-1)
    mn.append(a)
    mn.append(b)
    return mn


print(min_max([1, 2, 3, 4, 49, 6]))
print(min_max([4, 100, 2, 66, 994, 6]))
print(min_max([1, 2, 3, 4, 5, 6]))
print(min_max([1000, 2030, 500, 342, 409, 634]))


"""
I am still relatively new to Python but I finally decided to do algorithm challenges on codewars. As always,
Other people have better solutions than I do but I am ok with it because I learn from them.
"""

# This is the better more simplistic solution and is best practices

'''
def min_max(lst):
    return [min(lst), max(lst)]
'''

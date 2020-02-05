"""

"""


def count_characters(string):
    count_dict = {}
    for c in string:
        if c in count_dict:
            count_dict[c] += 1
        else:
            count_dict[c] = 1
    print(count_dict)


first = 'Lorem'
second = 'liopleurodon'

print(count_characters(first))
print(count_characters(second))

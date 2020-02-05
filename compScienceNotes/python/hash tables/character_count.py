"""
In this algorithm, the goal is to find out how many times each character shows up in a string. 

The best way to keep track of hits on each letter is to use a dictionary and use it as a hash table.

We don't have to worry about collisions with this particular problem as we want 
to count how many times each character is in a particular string. 

"""


def count_characters(string):
    count_dict = {}  # O(1)
    for character in string:  # O(n)
        if character in count_dict:
            count_dict[character] += 1
        else:
            count_dict[character] = 1
    print(count_dict)


first = 'Lorem'
second = 'liopleurodon'

print(count_characters(first))
print(count_characters(second))

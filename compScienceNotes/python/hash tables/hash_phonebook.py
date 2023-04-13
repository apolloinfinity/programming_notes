"""
-phone book is going to store 3 simple items
-name, last name, and phone number
This is CS fundementals on hash tables
"""

# Simple version of hash

phonebook = {}  # empty dictionanary to start off with.

phonebook["mom"] = "555-555-001"
phonebook["dad"] = "555-555-002"
phonebook["wife"] = "555-555-003"

# print(phonebook)

# Get wife's phone number
print(phonebook["wife"])
# end simple hash map

""" Preventing Duplicates """
# In the example of the phonebook We don't want duplicates
# We want the number to only show up once and prevent duplicate number's from polluting the hashmap


def check_for_dupe_names(name):
    if (phonebook[name]):
        print('That number exists!')
    else:
        phonebook[name]

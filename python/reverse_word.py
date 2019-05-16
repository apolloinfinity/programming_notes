"""Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. 
Any spaces in the string should be retained.

1. Create a list of the words
2. reverse the 

"""

def reverse_words(str):
    w = str[::-1]
    q = w.split(" ")[::-1]
    r = " ".join(q)
    print(r)

reverse_words('Hello world!')
reverse_words("double  spaces")

c = "Hello world"
# d = list(reversed(c))
# e = "".join(d)

# Best practices solution
""" def reverse_words(str):
    return ' '.join(s[::-1] for s in str.split(' '))
"""
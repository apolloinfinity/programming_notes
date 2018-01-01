"""Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. 
Any spaces in the string should be retained.

1. Create a list of the words
2. reverse the 

"""

def reverse_words(words):
    c = list(reversed(words))
    e = "".join(c)
    print(e)


reverse_words('Hello world!')

# c = "Hello world"
# d = list(reversed(c))
# e = "".join(d)
# print(g)

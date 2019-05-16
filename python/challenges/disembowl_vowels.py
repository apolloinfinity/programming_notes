import re

# Remove all the vowels in a string and return a new string with not vowels"

def disemvowel(string):
    return re.sub(r'[ieaou]', '', string, flags=re.IGNORECASE)


print(disemvowel('Hello, I am a string with vowels'))

# This is my solution to removing all vowels from a sentence
# It was simple, just use the REGEX
#
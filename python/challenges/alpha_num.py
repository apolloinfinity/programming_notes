import string as s
import re

def alphabet_position(text):
    keys = list(s.ascii_lowercase)
    values = list(range(1,27))
    alpha_dict = dict(zip(keys, values))

    clean_text = re.sub(r'[^a-z]', "",  text.lower())

    alpha_pos = []

    for letters in clean_text:
        letters = alpha_dict[letters]
        alpha_pos.append(str(letters))

    return "".join(alpha_pos)
    # return clean_text

print(alphabet_position("hello"))
print(alphabet_position("I AM A STRINGS!!"))
print(alphabet_position("aaaaaaaaa"))


"""
The more Pythonic way of doing my lengthy script

def alphabet_position(text):
    return ' '.join(str(ord(c) - 96) for c in text.lower() if c.isalpha())
"""
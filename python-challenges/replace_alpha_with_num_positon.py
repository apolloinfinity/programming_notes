import string as s
import re

def alphabet_position(text):
    keys = list(s.ascii_lowercase)
    values = list(range(1,27))
    alpha_dict = dict(zip(keys, values))

    clean_text = re.sub(r'[^a-z]', "",  text)

    alpha_pos = []

    for letters in clean_text:
        letters = alpha_dict[letters]
        alpha_pos.append(str(letters))

    return "".join(alpha_pos)
    # return clean_text

print(alphabet_position("hello"))
print(alphabet_position("i am a string!"))
print(alphabet_position("aaaaaaaaa"))
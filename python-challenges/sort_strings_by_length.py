my_arr = ['meow', 'cat', 'claws', 'kitty litter']
another_arr = ['python', 'coding', '1', '0', 'I am a developer!']
# print(my_arr)

def sort_by_length(arr):
  a = sorted(arr, key=len)
  return a

print(sort_by_length(my_arr), sort_by_length(another_arr))
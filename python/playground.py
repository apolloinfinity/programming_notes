def binary_search(list, item):
    low = 0
    high = len(list) -1

    while low <= high:
        mid = (low + high) 
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

# my_list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41]

# print(binary_search(my_list, 3
# print(binary_search(my_list, 17))
# print(binary_search(my_list, -1))
# print(binary_search(my_list, 1))

my_arr = []

for number in range(0, 100000):
    my_arr.append(number + 1)

# print(my_arr[45])
print(binary_search(my_arr, 89232))
"""guesser.py, By Javier Ramirez, 2017-16-12
This program has the user guess a number between 1 and 100.
"""
import random

def main():

    print("Guess a number between 1 and 100")
    # random_Number = 35 for debugging only
    
    random_Number = random.randint(1,100)
    found = False  # flag variable to see
                   #if they guess the right number
    guess = 1

    while not found: 
        user_Guess = int(input("Your guess: "))
        if user_Guess == random_Number:
            print("You got it!")
            found = True
        elif user_Guess > random_Number:
            print("Guess lower!")
            guess += 1
        else:
            print("Guess higher!")
            guess += 1
    
    print("Thanks for playing! It took you {} tries!".format(guess))



if __name__ == "__main__":
    main()

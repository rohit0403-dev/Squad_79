![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | Special Calculator

Terence Tao loves Mathematics. So he decided to create one special calculator, which behaves a little
different to normal calculators.
Tao is now on a quest to create this special calculator. He needs **YOU** to help him code functionalities in the back-end though. Go to the `src/app.js` file and complete all the unfinished code to satiate her sweet tooth.

### How to approach a lab:

There are 3 functions that you will have to complete.
### Progression 1: Special Addition!

Simple Addition bores Tao, so he decided to revert it's role, by **subtracting when addition method is called**. Create a function `specialAddition()` that takes `numberOne, numberTwo` as arguments, and returns
_the subtraction of those two numbers_. 
**Negative numbers are not allowed, in case negative numbers are passed as aruments, the function should return 'Negative numbers are not allowed'**

(The exact return statement should be used in your function)

### Progression 2: Simple Division!

Tao loves division, so he kept everything simple and normal - so division works as division should work!
Create a function `simpleDivision()` that takes `numberOne, numberTwo` as arguments, and returns
_the division of those two numbers_.

### Progression 3: Special Calculator!

Tao just wanted the special addition and simple division methods for his special calculator. So now he wants to create his calculator in such a way, that as soon as any of the two operations are called, the
respective operation is done - in the way he have defined those operations.
Create a function `specialCalculator()` that takes `numberOne, numberTwo, operation` as an argument, and returns _the respective output from the respective operation called_.

### Challenge : If-Else or Something Else!
Try to complete this challenge using ternary Operators we learnt in the previous semster( condition : true ? false)


## Steps to start the assignment
**Step 1: Understand the Problem Statement**
- Special Addition: Instead of adding the two numbers, you will subtract them. If any number is negative, return an error message.
- Simple Division: Implement division as it normally works, but handle the case of division by zero.
- Special Calculator: This function will dynamically decide whether to perform the special addition or simple division based on the operation provided. The task also challenges you not to use if-else statements.

**Step 2: Define the Functions**
- There are three functions to create:

- specialAddition(): Takes two numbers and returns their subtraction. If either number is negative, return a specific error message.
- simpleDivision(): Takes two numbers and returns their division. Handle the case where division by zero occurs.
- specialCalculator(): Decides which operation to execute (special addition or simple division) based on an argument (operation).

**Step 3: Implement the Functions and pass Test cases**


**Step 4: Edge Cases**
Ensure you handle division by zero correctly.
Test edge cases where both numbers are negative in specialAddition().

**Step 5: Submit the Solution**
Once the functions are correctly implemented and tested, you can submit their code. you should also verify that all test cases pass successfully.

## Explanation of Test cases
**Test Case 1: Adding two numbers**
- Description: The test checks if the specialAddition() function correctly subtracts two positive numbers (10 and 5).
- Expected Result: It should return 5 (because 10 - 5 = 5).
- Why it's important: This tests the basic functionality of the addition operation, where subtraction should occur.

**Test Case 2: Negative numbers not allowed**
- Description: The test checks if the specialAddition() function handles negative numbers correctly. It passes a negative number (-1) and a positive number (2).
- Expected Result: It should return 'Negative numbers are not allowed' because negative numbers are not allowed as per the problem statement.
- Why it's important: This ensures that the function handles invalid input (negative numbers) appropriately by returning the correct error message.

**Division Test Cases (simpleDivision)**
**Test Case 1: Dividing two valid numbers**
- Description: The test checks if the simpleDivision() function correctly divides two positive numbers (10 and 5).
- Expected Result: It should return 2 (because 10 ÷ 5 = 2).
- Why it's important: This test ensures that the division functionality works correctly for normal cases.

**Test Case 2: Division where numberTwo is greater than numberOne**
- Description: The test checks if the simpleDivision() function handles cases where the second number is greater than the first number. It divides 5 by 10.
- Expected Result: It should return 'Cannot divide a smaller number by a larger number' because dividing a smaller number by a larger number is considered invalid in this context.
- Why it's important: This checks that the function handles edge cases (such as division resulting in a fraction or invalid logic) and returns the correct error message.

**Test Case 3: Dividing by a negative number**
- Description: The test checks if the simpleDivision() function handles negative numbers correctly. It divides 10 by -5.
- Expected Result: It should return 'Negative numbers are not allowed' because negative numbers are not allowed as per the problem statement.
- Why it's important: This ensures that the function handles invalid input (negative numbers) appropriately by returning the correct error message.

**Special Calculator Test Cases (specialCalculator)**
**Test Case 1: Adding two valid numbers using the special calculator**
- Description: The test checks if the specialCalculator() function correctly calls the specialAddition() function to subtract 10 and 5.
- Expected Result: It should return 5 (because 10 - 5 = 5).
- Why it's important: This test ensures that the special calculator is correctly calling the right operation (specialAddition) and returning the correct result.

**Test Case 2: Dividing two valid numbers using the special calculator**
- Description: The test checks if the specialCalculator() function correctly calls the 
 simpleDivision() function to divide 10 by 5.
- Expected Result: It should return 2 (because 10 ÷ 5 = 2).
- Why it's important: This test ensures that the special calculator is correctly calling the right operation (simpleDivision) and returning the correct result.

**Test Case 3: Handling a negative number with special calculator**
- Description: The test checks if the specialCalculator() function returns an error message when a negative number is passed for the specialAddition operation. It passes 1 and -2 as arguments.
- Expected Result: It should return 'Negative numbers are not allowed' because negative numbers are not allowed in the specialAddition operation.
- Why it's important: This ensures that the special calculator checks for negative numbers and returns the appropriate error message when needed.


*The first 6 test cases carry 1 mark each, the last 2 test cases carry 2 marks each totalling to 10 marks.*

Happy Coding Kalvium ❤️

## Assignment Overview
- This assignment aims to help you understand the fundamentals of asynchronous programming and callbacks in JavaScript.
- You will simulate an API call using setTimeout, handle errors for invalid inputs, and display the results. 

## Steps to Complete the Assignment
**Write the fetchUserData Function**
- Accepts two parameters:
- userId: The ID of the user to fetch details for.
- callback: A function to handle the result.
- Simulates a delay of 2 seconds using setTimeout.
- Checks if the user exists in a predefined object (mockUserData):
- If found, calls the callback with null for the error and the user data.
- If not found, calls the callback with an error message and null for the data.

**Write the displayUserData Function**
- Accepts two parameters:
- error: The error message if the user ID is invalid.
- data: The user data if the user ID is valid.
- Logs the error if it's not null, or logs the user data.

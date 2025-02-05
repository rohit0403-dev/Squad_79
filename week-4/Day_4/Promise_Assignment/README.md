**This assignment will be mentor-led code along, where we will be working together to understand and implement functionalities related to Promises.**

## Progression 1: Fetch Users
- Modify the fetchUsers function to log the number of users fetched from the API to the console. 
- The function should return a promise, using the Fetch API.
> Hint: You can use console.log inside the .then block after the users are pushed to the users array.
**Expected Output:**
- The function should log the number of users fetched from the API to the console.
The function should return a promise that resolves to an array of users.

## Progression 2: Display Users
- Update the displayUsers function to display the total number of users at the end of the user list.
> Hint: You can append a paragraph with the total count of users to the output string before setting the innerHTML.
**Expected Output:**
- The function should display the user data in HTML format.
- The HTML should include the user's name, email, phone number, website, company name, city, and zip code.
- The HTML should also display the total number of users at the end of the list.

## Progression 3: Create User
- Implement error handling in the createUser function to simulate a real error scenario. Make the function reject the promise if a user with the same email already exists in the users array.
- Hint: You can use the .find method to check if the email already exists in the users array before pushing the new user.
**Expected Output:**
- The function should return a promise that resolves when a new user is added successfully.
- The function should reject the promise if a user with the same email already exists.


## Progression 4: Initialize Data
- Enhance the init function to show a loading message while the user data is being fetched and displayed.
- Hint: You can set the innerHTML of the message element to "Loading..." at the beginning of the init function and clear it after displaying users.
**Expected Output:**
- The function should display a loading message while the user data is being fetched.
- The function should display the user data and remove the loading message after fetching is complete.

## Progression 5: Fetch and Add User
- Modify the getData function to add a new user only if there are fewer than 10 users in the users array. Otherwise, log an error message to the console.
- Hint: Check the length of the users array before calling createUser and handle the case where the length is 10 or more.
**Expected Output:**
- The function should add a new user to the users array if there are fewer than 10 users.
- The function should log an error message to the console if there are already 10 users.

## Display Error Handling
- Update the displayError function to clear any existing error messages before displaying a new one.
- Hint: Ensure that the errorDiv is removed if it already exists before appending the new error message.
**Expected Output:**
- The function should clear any existing error messages before displaying a new one.

## General Challenge: Use Fetch API Instead of Axios
- Question: Rewrite the fetchUsers function to use the Fetch API instead of Axios for fetching user data.
- Hint: Use fetch and handle the promise with .then and .catch for response handling and error handling.
**Expected Output:**
- The function should use the Fetch API to fetch user data.
- The function should return a promise that resolves to an array of users.


## Advanced Challenge: Add Edit Functionality
- Implement a new function editUser that allows editing the details of a user based on their email. 
- Update the display to reflect the changes.
- Hint: Use the .find method to locate the user in the users array, update their details, and then call displayUsers to refresh the display.
**Expected Output:**
- The function should allow editing the details of a user based on their email.
- The function should update the user data in the users array.
- The function should call displayUsers to update the displayed user list with the edited information.



The data should be fetched and displayed in the following format
```
Name : New User 1

Email : newuser1@example.com

Phone : 123-456-7890

City : New City 1

Zipcode : 12345

Company : New Company 1

Name : New User 2

Email : newuser2@example.com

Phone : 234-567-8901

City : New City 2

Zipcode : 23456

Company : New Company 2.....
```
Happy Coding Kalvium ❤️



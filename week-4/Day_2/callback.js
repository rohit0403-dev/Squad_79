/**
 * What is callback ?
 */
// A callback in JavaScript is simply a function that is passed as an argument
// to another function and is executed later, once some task or operation is completed.
// It’s a way to say “Hey, after you finish doing this, run this code.

/**
 * Examples
 */
// function sayHello(name, callback) {
//     console.log("Hello, " + name);
//     callback();
//   }

//   function goodbye() {
//     console.log("Goodbye!");
//   }

//   sayHello("Alice", goodbye);

/**
 * Event Handeling
 */
// button.addEventListener("click", function() {
//     console.log("Button clicked!");
//   });

/**Example-2 */
// Simulating an API request with a callback
// function fetchUserData(userId, callback) {
//     console.log(`Fetching data for user ${userId}...`);

//     // Simulate a delay as if we're waiting for an API response (e.g., 2 seconds)
//     setTimeout(() => {
//       // Simulating a response object
//       const userData = {
//         id: userId,
//         name: 'John Doe',
//         age: 28,
//         location: 'New York'
//       };

//       // Call the callback function once the data is "fetched"
//       callback(null, userData);  // null is for no error, and userData is the result
//     }, 2000);  // 2-second delay
//   }

//   // Process the user data when fetched
//   function processUserData(error, user) {
//     if (error) {
//       console.log('Error fetching user data:', error);
//       return;
//     }

//     console.log('User data received:', user);
//     console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
//   }

//   // Use the fetchUserData function with the callback
//   fetchUserData(101, processUserData);

/**
 * Callback Hell
 */
// fs.readFile('file.txt', function(err, data) {
//     if (err) {
//       console.error('Error reading file:', err);
//       return;
//     }
//     processFile(data, function(err, processedData) {
//       if (err) {
//         console.error('Error processing file:', err);
//         return;
//       } 

// function task1(callback) {
//   setTimeout(() => {
//     console.log("task-1 completed");
//     callback();
//   }, 1000);
// }
// function task2(callback) {
//   setTimeout(() => {
//     console.log("task-2 completed");
//     callback();
//   }, 1500);
// }
// function task3(callback) {
//   setTimeout(() => {
//     console.log("task-3 completed");
//     callback();
//   }, 2000);
// }
// function task4(callback) {
//   setTimeout(() => {
//     console.log("task-4 completed");
//     callback()
//   }, 2500);
// }
// task1();
// task2();
// task3();
// task4();

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("Finished All Task");
//       });
//     });
//   });
// });

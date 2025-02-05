function fetchUserData(userId, callback) {
  const mockUserData = {
      1: { name: "Alice", age: 25, city: "New York" },
      2: { name: "Bob", age: 30, city: "Los Angeles" },
      3: { name: "Charlie", age: 35, city: "Chicago" }
  };

  setTimeout(() => {
      if (mockUserData[userId]) {
          callback(null, mockUserData[userId]);
      } else {
          callback("User not found", null);
      }
  }, 2000); // Simulating async behavior with a delay
}

function displayUserData(error, data) {
  if (error) {
      console.log("Error:", error);
  } else {
      console.log(`Name: ${data.name}, Age: ${data.age}, City: ${data.city}`);
  }
}
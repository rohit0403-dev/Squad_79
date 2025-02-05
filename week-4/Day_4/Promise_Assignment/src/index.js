const users = [];
const newUsers = [
  {
    name: "New User 1",
    email: "newuser1@example.com",
    phone: "123-456-7890",
    website: "newuser1.com",
    company: { name: "New Company 1" },
    address: { city: "New City 1", zipcode: "12345" },
  },
  {
    name: "New User 2",
    email: "newuser2@example.com",
    phone: "234-567-8901",
    website: "newuser2.com",
    company: { name: "New Company 2" },
    address: { city: "New City 2", zipcode: "23456" },
  },
  {
    name: "New User 3",
    email: "newuser3@example.com",
    phone: "345-678-9012",
    website: "newuser3.com",
    company: { name: "New Company 3" },
    address: { city: "New City 3", zipcode: "34567" },
  },
];

let newUserIndex = 0;

// Progression 1: Fetch user data from API
function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((fetchedUsers) => {
      users.push(...fetchedUsers);
      return users;
    })
    .catch((error) => displayError(error));
}

// Progression 2: Function to display users
function displayUsers() {
  console.log("Users")
  const messageDiv = document.getElementById("message");
  if (!messageDiv) return;

  messageDiv.innerHTML = "";
  
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <p>Name : ${user.name}</p>
      <p>Email : ${user.email}</p>
      <p>Phone : ${user.phone}</p>
      <p>Website : ${user.website}</p>
      <p>Company : ${user.company.name}</p>
      <p>City : ${user.address.city}</p>
      <p>Zipcode : ${user.address.zipcode}</p>
      <hr />
    `;
    messageDiv.appendChild(userDiv);
  });
}

// Progression 3: Function to add a new user
function originalCreateUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user || !user.email) {
        reject(new Error("Invalid user data"));
        return;
      }

      const isDuplicate = users.some(
        (existingUser) => existingUser.email === user.email
      );
      if (isDuplicate) {
        reject(new Error("User with this email already exists"));
        return;
      }

      users.push(user);
      resolve(user);
    }, 1000);
  });
}

// Progression 4: Async function to fetch and display users
async function init() {}

// Progression 5: Function to get data and then add a new user
function getData() {}

// Function to display error
function displayError(error) {
  const messageDiv = document.getElementById("message");
  if (!messageDiv) return;

  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";
  errorDiv.textContent = `Error: ${error.message}`;
  messageDiv.appendChild(errorDiv);
}

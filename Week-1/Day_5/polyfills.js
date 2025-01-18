Array.prototype.myMap = function (callback) {
    let result = []; // Create an empty array to store the results
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i])); // Apply the callback to each element
    }
    return result; // Return the new array
};

// Example usage
let numbers = [1, 2, 3];
let doubled = numbers.myMap(function (num) {
    return num * 2; // Double each number
});
console.log(doubled); // [2, 4, 6, 8]


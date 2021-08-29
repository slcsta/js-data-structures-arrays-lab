// Write your solution here!

// 1. create four arrays of pets
// 2. the four arrays are called:
//     append, prepend, removeLast, removeFirst
// 3. set all initial array values to ["Milo", "Otis", "Garfield"]
// 4. work with actions that mutate the underlying structure (pop(), push(), shift(), unshift())
// 5. add Odie to the end of the pets array
// 6. add Odie to the beginning of the pets array
// 7. remove last pet from the pets array 
// 8. remove first pet from the pets array


const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

append.push('Odie');
prepend.unshift('Odie')
removeLast.pop()
removeFirst.shift()

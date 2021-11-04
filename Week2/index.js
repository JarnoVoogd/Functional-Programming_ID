import fetch from "node-fetch";

// Creating an array to push data to 
let array = [];

// This function fetches data from SWAPI and seperates the .json part
function test(id) {
  const url = `https://swapi.dev/api/people/${id}/}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

// This for loop loops through the data fetched by 'test' and pushes it to  my array
// The data is put in an object so 'array' will be an array with objects
for (let i = 1; i < 6; i++) {
  let person = await test(i);
  array.push({ name: person.name, vehicles: person.vehicles });
}

console.log(array);


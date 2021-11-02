import fetch from "node-fetch";

let array = [];

function test(id) {
  const url = `https://swapi.dev/api/people/${id}/}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

for (let i = 1; i < 6; i++) {
  let person = await test(i);
  array.push({ name: person.name, vehicles: person.vehicles });
}

console.log(array);

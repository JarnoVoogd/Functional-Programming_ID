import fetch from "node-fetch";

// Creating an array to push data to 
let allFetches = [];
let somPerSoort = [];
let personenData = [];

// This function fetches data from SWAPI and seperates the .json part
function fetchPeople(id) {
  const url = `https://swapi.dev/api/people/${id}/`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

// Variable I use to count the amount of errors in the data
// This was necessary because of 0 < 5 amount of errors in the API data
let endFetch = 0;

// for loop that~
for (let i = 0; endFetch < 5; i++) {
  await fetchPeople(i).then(persoon => {
    if (!persoon.detail) {
      allFetches.push(persoon);
    } else {
      endFetch++;
    }
  });
}


Promise.all(allFetches).then(allePersonen => {
  //   console.log("alle data");
  //   console.log(allePersonen);

  for (let i = 0; i < allePersonen.length; i++) {
    personenData.push(allePersonen[i]["name"]);
  }
  console.log(personenData);

  personenData.forEach((i) => {
    somPerSoort[i] = (somPerSoort[i] || 0) + 1;
  });

  console.log(somPerSoort);
});
const data = require('./data.json');

let huisdierData = [];
const lowercase = huisdierData.toLowerCase;


for (let i = 0; i < data.length; i++) {
    huisdierData.push(twoSpaces(data[i]['favourite-pet']));
    huisdierData[i] = huisdierData[i]
        .charAt(0)
        .toUpperCase() + huisdierData[i]
        .substring(1)

    huisdierData[i] = huisdierData[i]
        .replace('Capricornis sumatraensis', 'Bosgems');

} 

function twoSpaces(string){
    let array = string.split(" ");
    if (array.length > 2) {
    return array[0];
 }
 return string
}


    

// // Count duplicate items
// function howManyPerCategorie(huisdierData){​​​​​​​
// constcounts = {​​​​​​​}​​​​​​​;
// huisdierData.forEach((x) => {​​​​​​​
// counts[x] = (counts[x] || 0) + 1;
//     }​​​​​​​);

// returncounts;
// }​​​​​​​




console.log(huisdierData);





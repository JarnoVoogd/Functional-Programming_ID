// data.json bestand ophalen
const data = require('./data.json');

// Array aanmaken om de data in te zetten
let huisdierData = [];

// For loop die elk array in het data.json bestand langs gaat
// Specefiek zoekt naar 'favourite-pet' en die data in het huisdierData array zet
// Het schoont de data op, het geeft elk woord een hoofdletter
//Tot slot maakt het gebruik van de functie twoSpaces, uitleg bij de betreffende functie
for (let i = 0; i < data.length; i++) {
    huisdierData.push(twoSpaces(data[i]['favourite-pet']));
    huisdierData[i] = huisdierData[i]
        .charAt(0)
        .toUpperCase() + huisdierData[i]
        .substring(1)

    huisdierData[i] = huisdierData[i]
        .replace('Capricornis sumatraensis', 'Bosgems');

} 


// Deze functie checkt elke string op spaties
// Bij elke spatie splitst hij de string op
// Bij meer dan 2 resulterende strings verwijderd hij alles behalve de eerste string
// Dit garandeerd dat dierennamen met twee delen blijven staan maar alle input met ' of ' erin na het eerste deel verwijderd worden
function twoSpaces(string){
    let array = string.split(" ");
    if (array.length > 2) {
    return array[0];
 }
 return string
}




// Hier roep ik de opgeslagen data in de arrays op
console.log(huisdierData);

    




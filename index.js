// data.json bestand ophalen
const data = require('./data.json');

// Arrays aanmaken om de data in te zetten
let huisdierData = [];
let favoDatumData = [];


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

    favoDatumData.push(data[i]['favourite-date']);
    favoDatumData[i] = favoDatumData[i]
        .split("/")


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




// Hier maak ik een array om de opgetelde waarden in op te slaan
var somPerSoort = [];

// Hier ga ik elke string in huisdierData langs en telt ze per soort op
    // Is een soort string nog niet voorbijgekomen is het aantal dus 0, komt de string wel voorbij wordt +1 gedaan
huisdierData.forEach((i) =>{ somPerSoort[i] = (somPerSoort[i]||0) + 1;});


// Hier roep ik de opgeslagen data in de arrays op
console.log(huisdierData);
console.log(somPerSoort);
console.log(favoDatumData);



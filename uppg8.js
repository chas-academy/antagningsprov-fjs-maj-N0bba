

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

// Array som lagrar fem person objekt med namn och ålder
let persons = {
    data: [
        {
            name: "Kalle",
            age: 25,
        }, 
        {
            name: "Anna",
            age: 43,
        }, 
        {
            name: "Karin",
            age: 30,
        }, 
        {
            name: "Bengt",
            age: 50,
        }, 
        {
            name: "Johan",
            age: 26,
        }, 
    ]
} 

// Funktion som tar med arrayen i parameter input
function filterAge(persons) {
    // För varje person objekt i arrayen
    for (person of persons.data) {
        // Om personen i loopens ålder är mer eller likamed 30
        if (person.age >= 30) {
            // Logga personens namn
            console.log(person.name);
        }
    }
}

// Kalla på funktionen med arrayen som parameter
filterAge(persons);

}

module.exports = { uppg8 };
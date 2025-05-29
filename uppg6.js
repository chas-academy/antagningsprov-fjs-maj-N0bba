

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

    // Array med namn
    let names = ["Kalle", "Anna", "Bengt", "Håkan"];
    // För varje namn i arrayen, logga namnet.
    for (name of names) {
        console.log(name);
    }
 
}

module.exports = { uppg6 };
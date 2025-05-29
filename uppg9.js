

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    // Array med nummer
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // Funktion som tar med arrayen i parameter input
    function sort(numbers) {
        // För varje nummer i arrayen
        for (number of numbers) {
            // Om numret delas med två och RESTEN av delningen INTE är likamed 0 - är talet udda
            if (number % 2 !== 0) {
                console.log(`Talet ${number} är udda!`);
            // Om numret delas med två och RESTEN av delningen ÄR likamed 0 - är talet jämnt
            } else if (number % 2 == 0) {
                console.log(`Talet ${number} är jämnt!`);
            } 
        }
    }
    // Anropar funktionen med numbers arrayen
    sort(numbers);
}

module.exports = { uppg9 };
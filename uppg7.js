

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
    
    // Funktion med dubbla parameter input
    function sum(num1, num2) {
        // Adderar talen till en gemensam variabel
        let sum = num1 + num2;
        // Return med svaret
        return sum;
    }
    // Loggar svaret med parametrar "5" och "10"
    console.log(sum(5, 10));
 
}

module.exports = { uppg7 };
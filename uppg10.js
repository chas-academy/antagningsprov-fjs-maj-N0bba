function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

  let bigEven = [];
  let smallOdd = [];
  let other = [];
  // Funktion som tar numbers arrayen i parameter input
  function sortNumbers(numbers) {
    // För varje nummer i arrayen
    for (number of numbers) {
      // Om numret delas med två och RESTEN av delningen ÄR likamed 0 OCH numret är MER eller likamed än 10.
      if (number % 2 == 0 && number >= 10)  {
        // Lägg till numret i arrayen bigEven
        bigEven.push(number);
        // Om numret delas med två och resten av delningen INTE är likamed 0 OCH numret är mindre än 10 
      } else if (number % 2 !== 0 && number < 10) {
        // Lägg till numret i arrayen smallOdd
        smallOdd.push(number);
      } else {
        // Om inget påstående stämmer, lägg till numret i arrayen "other"
        other.push(number);
      }
    }
    // Logga samtliga arrayer
    console.log(`BigEven är likamed: ${bigEven}`);
    console.log(`smallOdd är likamed: ${smallOdd}`);
    console.log(`other är lika med: ${other}`);
  }
  // Anropar funktionen med numbers arrayen
  sortNumbers(numbers);

  }
  
  module.exports = { uppg10 };
  
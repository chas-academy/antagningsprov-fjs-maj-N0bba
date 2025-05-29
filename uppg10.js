function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

// Deklarerar objektet som ska returneras
let results = {
  bigEven: [],
  smallOdd: [],
  other: [],
}
  // För varje nummer i arrayen
    for (number of numbers) {
      // Om numret delas med två och RESTEN av delningen ÄR likamed 0 OCH numret är MER än 10.
      if (number % 2 == 0 && number > 10)  {
        // Lägg till numret i arrayen bigEven i objektet results
        results.bigEven.push(number);
        // Om numret delas med två och resten av delningen INTE är likamed 0 OCH numret är mindre än 10 
      } else if (number % 2 !== 0 && number < 10) {
        // Lägg till numret i arrayen smallOdd i objektet results
        results.smallOdd.push(number);
      } else {
        // Om inget påstående stämmer, lägg till numret i arrayen "other" i objektet results
        results.other.push(number);
      }
    }
    // Returnera objektet
    return results;
  }
  module.exports = { uppg10 };


function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    const num1 = 5;
    const num2 = 10;

    // Om tal 1 är större än tal 2
    if (num1 > num2) {
        console.log("Det första talet är större än det andra");
    // Om tal 2 är större än tal 1
    } else if (num1 < num2) {
        console.log("Det andra talet är större än det första");
    }


}

module.exports = { uppg5 };
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// 1:  Ontvang een array en controleer of deze valid is.
const validateCred = (cardNumber) => {
    // 2:  Array na lopen.
    // 2a: Draai de array om.
      const reversedNumber = cardNumber.reverse();
    // 2b: Haal het eerste cijfer eraf. (Begin for loop bij index 1)
      let total = 0;
      let multiplier = 1;
        for (let i = 0; i < cardNumber.length; i++) {
        // 2c: Verdubbel de cijfers om en om. 
        let x = reversedNumber[i] + reversedNumber[i] * (i % 2);
        // 2d: Wanneer het nummer > 9, dan -9.
        if (x > 9) {
        x -= 9; 
        }
        total = total + x;
      }
    // 3 en 4: Stuurt true of false terug.
     return (total % 10 === 0);
};

// 1: Loop de array door met de creditcardnummers. 
const findInvalidCards = (allCards) => {
  let invalidCards = [];
  // 2:  Controleer per kaart.
  for (let i = 0; i < allCards.length; i++) {
  // 2a: Valideer de kaart via de functie validateCred.
    if (validateCred(allCards[i]) === false) {
      invalidCards.push(allCards[i]);
    }
  // 2b: Als kaart invalid is, dan aan invalid array toevoegen.
  }
  return invalidCards;
}
// x: Retourneer een nieuwe array van ongeldige creditcards.

// Ga na welke creditcardmaatschappijen foutieve creditcardnummers hebben verstrekt. 

// 1: Maak een functie aan met 1 parameter.
const idInvalidCardCompanies = (companys) => {
  // 2: Maak een nested array
  let invalidNumbers = [];
  let amex = 3;
  let visa = 4;
  let masterCard = 5;
  let discover = 6;

  if (amex === invalidNumbers[0] && visa === invalidNumber[0] && masterCard === invalidNumbers[0] && discover === invalidNumbers[0]) {
    return 'Company not found';
  }
};

// 3: Return een array van creditcardmaatschappijen.
// 4: Als een creditcardnummer niet start met de getallen 3, 4, 5 en 6, moet je het bericht uitprinten: "Company not found".


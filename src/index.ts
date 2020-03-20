import Card from "./Card";
import Suit from "./Suit";
import Deck from "./Deck";

// let card:Card = new Card(2, Suit.CLUB);
// console.log(JSON.stringify(card, null, 2));
console.log(JSON.stringify(new Deck(), null, 2));
import Card from "./Card";
import Suit from "./Suit";

let card:Card = new Card(2, Suit.CLUB);
console.log(JSON.stringify(card, null, 2));
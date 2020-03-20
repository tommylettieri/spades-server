import Card from "./Card";
import Suit from "./Suit";
import Deck from "./Deck";
import Player from "./Player";

// let card:Card = new Card(2, Suit.CLUB);
// console.log(JSON.stringify(card, null, 2));
let deck:Deck = new Deck();
let players:Player[] = [];
for(let i: number = 0; i < 4; i++) {
    let player:Player = new Player();
    for(let q: number = 0; q < 13; q++) {
        player.takeCard(deck.drawCard());
    }
    players.push(player);
}
console.log(JSON.stringify(players, null, 2));
console.log(JSON.stringify(deck, null, 2));

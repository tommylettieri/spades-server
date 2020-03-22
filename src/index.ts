import Card from "./models/Card";
import Suit from "./constants/enums/Suit";
import Deck from "./models/Deck";
import Player from "./models/Player";
import Game from "./models/Game";
import './Server';
// let card:Card = new Card(2, Suit.CLUB);
// console.log(JSON.stringify(card, null, 2));

// let deck:Deck = new Deck();
// deck.shuffle();
// let players:Player[] = [];
// for(let i: number = 0; i < 4; i++) {
//     let player:Player = new Player();
//     for(let q: number = 0; q < 13; q++) {
//         player.takeCard(deck.drawCard());
//     }
//     players.push(player);
// }
// console.log(JSON.stringify(players, null, 2));
// console.log(JSON.stringify(deck, null, 2));


let g:Game = new Game();
g.startRound();
console.log(JSON.stringify(g, null, 2));
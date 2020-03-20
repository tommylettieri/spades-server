import Deck from "./Deck";
import Player from "./Player";
import Card from "./Card";

class Round {
    deck:Deck = new Deck();
    players:Player[];

    constructor(players: Player[]) {
        this.deck.shuffle();
        this.players = players;
        this.deal();
    }

    private deal() {
        let playerIndex: number = 0;
        let card:Card;
        while(card = this.deck.drawCard()) {
            this.players[playerIndex].takeCard(card);
            playerIndex++;
            playerIndex %= 4;
        }
    }
}

export default Round;
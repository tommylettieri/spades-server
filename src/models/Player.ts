import Card from "./Card";

class Player {
    private cards:Card[] = [];

    constructor() {
    }
    
    takeCard(card: Card) {
        this.cards.push(card);
    }
}

export default Player;
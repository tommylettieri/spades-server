import Player from "./Player";
import Round from "./Round";

class Game {
    private players: Player[] = [];
    private currentRound: Round;

    constructor() {
        for(let i:number = 0; i < 4; i++) {
            this.players.push(new Player());
        }
    }

    startRound() {
        this.currentRound = new Round(this.players);
    }
}

export default Game;
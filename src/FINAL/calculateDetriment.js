function calculateDetriment(information, pairings) {
    let decrement_X = 0,
        decrement_Y = 0,
        decrement_Z = 0;
    
    const rounds = information.rounds,
        teams = information.teams,
        players = information.players;

    const QzConstant = 1 - 4 / (rounds * players * (players + 1))

    for (let round = 0; round < rounds; round++) {
        for (let team = 0; team < teams; team++) {
            let teamDecrement_X = players;

            for (let player = 0; player < players; player++) {
                teamDecrement_X -= 2 * pairings[team][player][round][2];
            }

            decrement_X += teamDecrement_X < 0 ? -teamDecrement_X : teamDecrement_X;
        }
    }

    for (let team = 0; team < teams; team++){
        for (let player = 0; player < players; player++){
            let playerDecrement_Y = (player + 1) * rounds

            for (let round = 0; round < rounds; round++){
                playerDecrement_Y -= pairings[team][player][round][0]
            }
        }
    }

    for (let team = 0; team < teams; team++){

        decrement_Z += Math.abs()
    }

    return [decrement_X, decrement_Y, decrement_Z];
}

export default calculateDetriment;
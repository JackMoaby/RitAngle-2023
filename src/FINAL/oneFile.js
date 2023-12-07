function manifestInformation(TEAMS, PLAYERS, ROUNDS){
    const isFloat = !(TEAMS % 2 === 0);

    const maxTimesEachTeamPlays = {
        "floor": Math.floor((ROUNDS * PLAYERS) / (TEAMS - 1)),
        "ceil": Math.ceil((ROUNDS * PLAYERS) / (TEAMS - 1))
    };

    if (!isFloat){
        return {
            eachTeamPlays: {
                lower: maxTimesEachTeamPlays["floor"],
                higher: maxTimesEachTeamPlays["ceil"]
            }
        }
    }

    return {
        eachTeamPlays: {
            lower: maxTimesEachTeamPlays["floor"],
            higher: maxTimesEachTeamPlays["ceil"]
        },
        floats:{
            perBoard: 1,
            perPlayer: 1,
            perTeam: 2 + Math.floor((ROUNDS * PLAYERS) / (2 * TEAMS))
        }
    }
}; 

function manifestPairing(pairings, pairingsInformation){
    let currentState = "";
    const teams = pairings.teams;
    const players = pairings.players;
    const rounds = pairings.rounds;
    const isFloat = pairingsInformation?.float === undefined ? false : true; 

    return {
        next: function(){
            // Represents board data as an array of journeys by each player
            // [ TEAM
                    // [ PLAYER
                        // [BOARD, SUB-BOARD, COLOUR (white = 0, black = 1)]
                    // ]
                // ]

            let currentState = [
                [ // A
                    [[1, 2, 0], [1, 1, 1], [1, 3, 1]],
                    [[2, 2, 1], [2, 1, 0], [2, 1, 0]],
                    [[3, 1, 1], [3, 3, 0], [3, 2, 1]],
                    [[4, 1, 1], [4, 3, 0], [4, 1, 0]]
                ],
                [ // B
                    [[1, 2, 1], [1, 3, 0], [1, 1, 0]],
                    [[2, 1, 1], [2, 2, 0], [2, 2, 1]],
                    [[3, 3, 0], [3, 2, 0], [3, 1, 1]],
                    [[4, 2, 1], [4, 3, 1], [4, 3, 0]]
                ],
                [ // C
                    [[1, 1, 1], [1, 2, 0], [1, 3, 0]],
                    [[2, 1, 0], [2, 3, 1], [2, 1, 1]],
                    [[3, 2, 0], [3, 3, 1], [3, 3, 0]],
                    [[4, 3, 0], [4, 1, 1], [4, 3, 1]]
                ],
                [ // D
                    [[1, 1, 0], [1, 3, 1], [1, 2, 0]],
                    [[2, 3, 1], [2, 2, 1], [2, 3, 0]],
                    [[3, 3, 1], [3, 1, 1], [3, 2, 0]],
                    [[4, 1, 0], [4, 1, 0], [4, 2, 1]]
                ],
                [ // E
                    [[1, 3, 1], [1, 1, 0], [1, 1, 1]],
                    [[2, 3, 0], [2, 1, 1], [2, 2, 0]],
                    [[3, 1, 0], [3, 2, 1], [3, 3, 1]],
                    [[4, 3, 1], [4, 2, 0], [4, 2, 0]]
                ],
                [ // F
                    [[1, 3, 0], [1, 2, 1], [1, 2, 1]],
                    [[2, 2, 0], [2, 3, 0], [2, 3, 1]],
                    [[3, 2, 1], [3, 1, 0], [3, 1, 0]],
                    [[4, 2, 0], [4, 2, 1], [4, 1, 1]]
                ]
            ]

            return {
                done: true,
                pairing: currentState
            }
        }
    }
}


function calculateDetriment(information, pairings) {
    let decrement_X = 0,
        decrement_Y = 0,
        decrement_Z = 0;
    
    const rounds = information.rounds,
        teams = information.teams,
        players = information.players;

    const QzConstant = 4 / (rounds * players * (players + 1))

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
        let playerDecrement_Z = 0;
        
        for (let player = 0; player < players; player++){
            let playerSumBlacks_Z = 0;
            let playerDecrement_Y = (player + 1) * rounds

            for (let round = 0; round < rounds; round++){
                playerDecrement_Y -= pairings[team][player][round][0]
                playerSumBlacks_Z += pairings[team][player][round][2]
            }
            
            let playerSumWhites_Z = rounds - playerSumBlacks_Z;
            playerDecrement_Z += (player + 1) * playerSumWhites_Z
        }
        
        decrement_Z += Math.abs(1 - QzConstant * playerDecrement_Z)
    }

    return decrement_X + decrement_Y + decrement_Z;
}

const pairings = { teams: 6, players: 4, rounds: 3 }
const pairingsInformation = manifestInformation(pairings.teams, pairings.players, pairings.rounds);

const pairingIterator = manifestPairing(pairings, pairingsInformation);
let currentPairing = pairingIterator.next()

const pairingDetriment = calculateDetriment(pairings, currentPairing.pairing)
console.log(pairingDetriment)

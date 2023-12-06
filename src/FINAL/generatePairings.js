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

export default manifestPairing;
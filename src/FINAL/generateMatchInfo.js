/**
 * Calculates and provides information about the scheduling of a sports event.
 *
 * @param {number} TEAMS - The number of teams participating in the event.
 * @param {number} PLAYERS - The number of players on each team.
 * @param {number} ROUNDS - The total number of rounds in the event.
 * 
 * @returns {Object} - An object containing information about the scheduling:
 *   - If the number of teams is even, it returns an object with the maximum and minimum times each team plays.
 *   - If the number of teams is odd, it also includes information about floating games per board, per player, and per team.
 */
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

export default manifestInformation;
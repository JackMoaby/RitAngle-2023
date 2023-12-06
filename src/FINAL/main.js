import manifestInformation from "./generateMatchInfo.js";
import manifestPairing from "./generatePairings.js";
import calculateDetriment from "./calculateDetriment.js"


const pairings = { teams: 6, players: 4, rounds: 3 }
const pairingsInformation = manifestInformation(pairings.teams, pairings.players, pairings.rounds);

const pairingIterator = manifestPairing(pairings, pairingsInformation);
let currentPairing = pairingIterator.next()

console.time("Get Detriment")
const pairingDetriment = calculateDetriment(pairings, currentPairing.pairing)
console.timeEnd("Get Detriment")

console.log(pairingDetriment)
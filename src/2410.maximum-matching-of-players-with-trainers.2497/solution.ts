function matchPlayersAndTrainers (players: number[], trainers: number[]): number {
    players.sort((a, b) => b - a);
    trainers.sort((a, b) => b - a);
    let result = 0;
    let indexP = 0;
    let indexT = 0;
    while (indexP < players.length && indexT < trainers.length) {
        if (trainers[indexT] < players[indexP]) {
            indexP++;
        } else {
            indexP++;
            indexT++;
            result++;
        }
    }
    return result;
}

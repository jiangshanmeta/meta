function isWinner (player1: number[], player2: number[]): number {
    const s1 = calc(player1);
    const s2 = calc(player2);
    if (s1 > s2) {
        return 1;
    } else if (s1 < s2) {
        return 2;
    }
    return 0;
}

function calc (player:number[]):number {
    let result = 0;
    for (let i = 0; i < player.length; i++) {
        if ((i > 0 && player[i - 1] === 10) || (i > 1 && player[i - 2] === 10)) {
            result += 2 * player[i];
        } else {
            result += player[i];
        }
    }
    return result;
}

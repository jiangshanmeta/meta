function masterMind (solution: string, guess: string): number[] {
    const map = new Map([
        ['R', 0, ],
        ['Y', 1, ],
        ['G', 2, ],
        ['B', 3, ],
    ]);
    const counts = [0, 0, 0, 0, ];
    let result1 = 0;
    for (let i = 0; i < solution.length; i++) {
        if (guess[i] === solution[i]) {
            result1++;
        } else {
            counts[map.get(solution[i])!]++;
        }
    }

    let result2 = 0;
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === solution[i]) {
            continue;
        }
        if (counts[map.get(guess[i])]) {
            result2++;
            counts[map.get(guess[i])]--;
        }
    }

    return [
        result1,
        result2,
    ];
}

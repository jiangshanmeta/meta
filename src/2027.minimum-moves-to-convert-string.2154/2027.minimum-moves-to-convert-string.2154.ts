function minimumMoves (s: string): number {
    let result = 0;
    let index = 0;
    while (index < s.length) {
        if (s[index] === 'O') {
            index++;
        } else {
            result++;
            index += 3;
        }
    }

    return result;
}

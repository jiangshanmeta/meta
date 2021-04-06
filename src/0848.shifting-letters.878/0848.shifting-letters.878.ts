function shiftingLetters (S: string, shifts: number[]): string {
    const moves:number[] = new Array(shifts.length);
    moves[moves.length - 1] = shifts[shifts.length - 1];
    for (let i = moves.length - 2; i > -1; i--) {
        moves[i] = (shifts[i] + moves[i + 1]) % 26;
    }
    return S.split('').map((letter, index) => {
        const code = letter.charCodeAt(0) - 97;
        return String.fromCharCode((code + moves[index]) % 26 + 97);
    }).join('');
}

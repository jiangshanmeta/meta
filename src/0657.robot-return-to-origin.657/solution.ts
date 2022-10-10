function judgeCircle (moves: string): boolean {
    let y = 0;
    let x = 0;
    for (const m of moves) {
        if (m === 'U') {
            y++;
        } else if (m === 'D') {
            y--;
        } else if (m === 'R') {
            x++;
        } else if (m === 'L') {
            x--;
        }
    }
    return x === 0 && y === 0;
}

function finalPositionOfSnake (n: number, commands: string[]): number {
    let x = 0;
    let y = 0;
    for (const command of commands) {
        if (command === 'LEFT') {
            y--;
        } else if (command === 'RIGHT') {
            y++;
        } else if (command === 'DOWN') {
            x++;
        } else {
            x--;
        }
    }
    return x * n + y;
}

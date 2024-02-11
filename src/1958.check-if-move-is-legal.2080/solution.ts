function checkMove(board: string[][], rMove: number, cMove: number, color: string): boolean {
    if (board[rMove][cMove] !== '.') {
        return false;
    }

    const diffs = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1],
    ]
    const check = (dx: number, dy: number) => {
        let x = rMove + dx;
        let y = cMove + dy;
        if (x < 0 || y < 0 || x === 8 || y === 8 || board[x][y] === color || board[x][y] === '.') {
            return false;
        }
        let end = false;
        while (!end) {
            x += dx;
            y += dy;
            if (x < 0 || y < 0 || x === 8 || y === 8 || board[x][y] === '.') {
                return false;
            }

            if (board[x][y] === color) {
                end = true;
            }

        }

        return end
    }

    for (const [dx, dy] of diffs) {
        if (check(dx, dy)) {
            return true;
        }
    }
    return false;
};
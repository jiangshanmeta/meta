/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (board.length === 0) {
        return;
    }
    const maxX = board.length - 1;
    const maxY = board[0].length - 1;
    const notSurround = Array.apply(null, {
        length: board.length,
    }).map(() => new Array(board[0].length).fill(false));

    function dfs (board, notSurround, x, y) {
        notSurround[x][y] = true;

        if (x > 0 && !notSurround[x - 1][y] && board[x - 1][y] === 'O') {
            dfs(board, notSurround, x - 1, y);
        }

        if (y < maxY && !notSurround[x][y + 1] && board[x][y + 1] === 'O') {
            dfs(board, notSurround, x, y + 1);
        }

        if (x < maxX && !notSurround[x + 1][y] && board[x + 1][y] === 'O') {
            dfs(board, notSurround, x + 1, y);
        }

        if (y > 0 && !notSurround[x][y - 1] && board[x][y - 1] === 'O') {
            dfs(board, notSurround, x, y - 1);
        }
    }

    //  标记和边缘的O相连的O
    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] === 'O' && !notSurround[0][j]) {
            dfs(board, notSurround, 0, j);
        }
        if (board[maxX][j] === 'O' && !notSurround[maxX][j]) {
            dfs(board, notSurround, board.length - 1, j);
        }
    }
    for (let i = 1; i < board.length - 1; i++) {
        if (board[i][0] === 'O' && !notSurround[i][0]) {
            dfs(board, notSurround, i, 0);
        }
        if (board[i][maxY] === 'O' && !notSurround[i][maxY]) {
            dfs(board, notSurround, i, maxY);
        }
    }

    for (let i = 1; i < board.length - 1; i++) {
        for (let j = 1; j < maxY; j++) {
            if (board[i][j] === 'O' && !notSurround[i][j]) {
                board[i][j] = 'X';
            }
        }
    }
};

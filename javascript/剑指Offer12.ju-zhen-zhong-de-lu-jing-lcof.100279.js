/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const M = board.length;
    const N = board[0].length;
    const used = new Array(M);
    for (let i = 0; i < M; i++) {
        used[i] = new Array(N).fill(0);
    }
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (dfs(board, word, used, 0, i, j)) {
                return true;
            }
        }
    }
    return false;
};

function dfs (board, word, used, index, x, y) {
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || used[x][y] || board[x][y] !== word[index]) {
        return false;
    }
    used[x][y] = true;
    index++;
    if (index === word.length) {
        return true;
    }
    if (dfs(board, word, used, index, x + 1, y) || dfs(board, word, used, index, x, y + 1) || dfs(board, word, used, index, x - 1, y) || dfs(board, word, used, index, x, y - 1)) {
        return true;
    }
    used[x][y] = false;
    return false;
}

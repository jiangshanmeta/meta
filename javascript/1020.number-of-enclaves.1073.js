/**
 * @param {number[][]} A
 * @return {number}
 */
// dfs把能从边远到达的节点都置为0
function dfs (x, y, A) {
    A[x][y] = 0;
    if (x > 0 && A[x - 1][y] === 1) {
        dfs(x - 1, y, A);
    }
    if (y > 0 && A[x][y - 1] === 1) {
        dfs(x, y - 1, A);
    }
    if (x < A.length - 1 && A[x + 1][y] === 1) {
        dfs(x + 1, y, A);
    }
    if (y < A[0].length - 1 && A[x][y + 1] === 1) {
        dfs(x, y + 1, A);
    }
}

var numEnclaves = function (A) {
    const stack = [];
    for (let i = 0; i < A.length; i++) {
        A[i][0] === 1 && dfs(i, 0, A);
        A[i][A[0].length - 1] === 1 && dfs(i, A[0].length - 1, A);
    }

    for (let j = 1; j < A[0].length - 1; j++) {
        A[0][j] === 1 && dfs(0, j, A);
        A[A.length - 1][j] === 1 && dfs(A.length - 1, j, A);
    }

    let result = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            A[i][j] === 1 && result++;
        }
    }
    return result;
};

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
    const map = {};
    const arr = [];
    const key = JSON.stringify(cells);
    map[key] = 0;
    arr[0] = key;

    for (let i = 0; i < N; i++) {
        const nextCells = new Array(cells.length);
        nextCells[0] = 0;
        nextCells[nextCells.length - 1] = 0;
        for (let j = 1; j < nextCells.length - 1; j++) {
            nextCells[j] = cells[j - 1] === cells[j + 1] ? 1 : 0;
        }
        const key = JSON.stringify(nextCells);
        if (map[key] === undefined) {
            map[key] = i + 1;
            arr[i + 1] = key;
        } else {
            // lastIndex = map[key];
            const countLoop = i - map[key] + 1;
            const mod = (N - i - 1) % countLoop;
            return JSON.parse(arr[map[key] + mod]);
        }

        cells = nextCells;
    }
    return cells;
};

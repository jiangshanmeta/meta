function mostFrequentPrime(mat: number[][]): number {
    const map = new Map<number, number>();
    const M = mat.length;
    const N = mat[0].length;
    const getNum = (x: number, y: number, dx: number, dy: number, acc: number) => {
        acc = acc * 10 + mat[x][y];

        if (map.has(acc)) {
            map.set(acc, map.get(acc)! + 1)
        } else {
            map.set(acc, 1);
        }

        x += dx;
        y += dy;
        if (x === -1 || y === -1 || x === M || y === N) {
            return;
        }
        getNum(x, y, dx, dy, acc);
    }
    const deltas = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1]
    ]

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            for (const [dx, dy] of deltas) {
                getNum(i, j, dx, dy, 0)
            }
        }
    }
    let result = -1;
    let maxCount = 0;
    for (const [key, count] of map) {
        if (key < 10 || !isPrime(key)) {
            continue;
        }

        if (count > maxCount) {
            result = key;
            maxCount = count;
        } else if (count === maxCount && key > result) {
            result = key;
        }

    }

    return result
};

function isPrime(n: number) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
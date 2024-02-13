function resultGrid(image: number[][], threshold: number): number[][] {
    const M = image.length;
    const N = image[0].length;
    const sums = new Array<number[]>(M);
    const counts = new Array<number[]>(M);
    const result = new Array<number[]>(M);
    for (let i = 0; i < M; i++) {
        sums[i] = new Array<number>(N).fill(0);
        counts[i] = new Array<number>(N).fill(0);
        result[i] = new Array<number>(N);
    }
    const check = (cx: number, cy: number) => {
        for (let x = cx - 1; x <= cx + 1; x++) {
            for (let y = cy - 1; y <= cy + 1; y++) {
                if (x + 1 <= cx + 1 && Math.abs(image[x + 1][y] - image[x][y]) > threshold) {
                    return false;
                }
                if (y + 1 <= cy + 1 && Math.abs(image[x][y + 1] - image[x][y]) > threshold) {
                    return false;
                }
            }
        }
        return true;
    }
    for (let i = 1; i < M - 1; i++) {
        for (let j = 1; j < N - 1; j++) {
            if (!check(i, j)) {
                continue;
            }
            let sum = 0;

            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    sum += image[x][y];
                }
            }

            const item = Math.floor(sum / 9);
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    sums[x][y] += item;
                    counts[x][y]++
                }
            }
        }
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (counts[i][j] === 0) {
                result[i][j] = image[i][j]
            } else {
                result[i][j] = Math.floor(sums[i][j] / counts[i][j])
            }
        }

    }


    return result
};
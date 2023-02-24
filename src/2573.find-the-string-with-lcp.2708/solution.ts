function findTheString (lcp: number[][]): string {
    const N = lcp.length;
    const result = new Array<string>(N);
    let code = 97;
    for (let i = 0; i < N; i++) {
        if (lcp[i][i] !== N - i) {
            return '';
        }
        if (result[i] !== undefined) {
            continue;
        }
        if (code === 123) {
            return '';
        }
        const c = String.fromCharCode(code++);
        result[i] = c;
        for (let j = i + 1; j < N; j++) {
            if (lcp[i][j] > N - j || lcp[j][i] !== lcp[i][j]) {
                return '';
            }
            // 只要大于0 则 i j相同
            if (lcp[i][j] > 0) {
                result[j] = c;
            }
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] === undefined) {
            if (code === 123) {
                return '';
            }
            result[i] = String.fromCharCode(code++);
        }
    }
    // DP校验
    for (let i = N - 2; i > -1; i--) {
        for (let j = N - 1; j > i; j--) {
            if (result[i] === result[j]) {
                if (j === N - 1) {
                    if (lcp[i][j] !== 1) {
                        return '';
                    }
                } else if (lcp[i][j] !== lcp[i + 1][j + 1] + 1) {
                    return '';
                }
            } else if (lcp[i][j] !== 0) {
                return '';
            }
        }
    }

    return result.join('');
}

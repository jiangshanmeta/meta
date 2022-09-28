function checkPartitioning (s: string): boolean {
    const n = s.length;
    const isPalindromes:boolean[][] = new Array(n);
    for (let i = n - 1; i > -1; i--) {
        isPalindromes[i] = new Array(n).fill(true);
        for (let j = i + 1; j < n; j++) {
            if (s[i] !== s[j] || !isPalindromes[i + 1][j - 1]) {
                isPalindromes[i][j] = false;
            }
        }
    }
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            if (isPalindromes[0][i] && isPalindromes[i + 1][j] && isPalindromes[j + 1][n - 1]) {
                return true;
            }
        }
    }

    return false;
}

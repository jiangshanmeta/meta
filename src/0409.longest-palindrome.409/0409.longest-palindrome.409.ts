function longestPalindrome (s: string): number {
    const counts:number[] = new Array(52).fill(0);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code > 96) {
            counts[code - 71]++;
        } else {
            counts[code - 65]++;
        }
    }
    let odd = 0;
    let result = 0;
    for (let i = 0; i < 52; i++) {
        if (counts[i] & 1) {
            if (odd === 0) {
                odd++;
            }
            result += counts[i] - 1;
        } else {
            result += counts[i];
        }
    }
    return result + odd;
}

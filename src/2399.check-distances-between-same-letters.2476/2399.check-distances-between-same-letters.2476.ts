function checkDistances (s: string, distance: number[]): boolean {
    const index1s = new Array<number>(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        if (index1s[code] === -1) {
            index1s[code] = i;
        } else if (distance[code] !== i - index1s[code] - 1) {
            return false;
        }
    }
    return true;
}

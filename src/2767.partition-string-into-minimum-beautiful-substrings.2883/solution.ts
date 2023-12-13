const options = [
    '1',
    '101',
    '11001',
    '1111101',
    '1001110001',
    '110000110101',
    '11110100001001',
];

function minimumBeautifulSubstrings (s: string): number {
    let result = s.length + 1;
    const backTracking = (index:number, count:number) => {
        if (index === s.length) {
            result = Math.min(result, count);
            return;
        }
        if (s[index] === '0') {
            return;
        }
        for (const str of options) {
            if (index + str.length > s.length) {
                return;
            }
            if (s.slice(index, index + str.length) === str) {
                backTracking(index + str.length, count + 1);
            }
        }
    };
    backTracking(0, 0);

    if (result === s.length + 1) {
        return -1;
    }
    return result;
}
export { minimumBeautifulSubstrings, };

function shortestBeautifulSubstring(s: string, k: number): string {
    let result = '';
    const map = new Map<number, number>();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '1') {
            continue;
        }
        count++;
        map.set(count, i);
        if (count >= k) {
            const start = map.get(count - k + 1)!;
            const str = s.slice(start, i + 1);
            if (result === '' || str.length < result.length || (str.length === result.length && str < result)) {
                result = str;
            }
        }
    }

    return result;
};
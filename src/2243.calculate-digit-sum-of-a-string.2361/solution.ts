function digitSum (s: string, k: number): string {
    while (s.length > k) {
        const result = [];
        let index = 0;
        let target = k;
        while (index < s.length) {
            let sum = 0;
            while (index < s.length && index < target) {
                sum += (+s[index++]);
            }
            result.push(sum);
            target += k;
        }

        s = result.join('');
    }
    return s;
}

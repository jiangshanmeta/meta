function romanToInt (s: string): number {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const list:number[] = s.split('').map(c => map[c]!);
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] < list[i + 1]) {
            list[i] = -list[i];
        }
    }
    return list.reduce((sum, item) => {
        return sum + item;
    }, 0);
}

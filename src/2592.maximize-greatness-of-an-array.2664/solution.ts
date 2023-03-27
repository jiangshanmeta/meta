function maximizeGreatness (nums: number[]): number {
    const m = new Map<number, number>();
    for (const num of nums) {
        if (m.has(num)) {
            m.set(num, m.get(num)! + 1);
        } else {
            m.set(num, 1);
        }
    }
    const unique = [...m.keys(), ].sort((a, b) => b - a);
    let result = 0;
    let great = 0;
    for (let i = 0; i < unique.length; i++) {
        const count = m.get(unique[i])!;
        const pair = Math.min(great, count);
        result += pair;
        great -= pair;
        great += count;
    }
    return result;
}

function halfQuestions (questions: number[]): number {
    const N = questions.length / 2;
    const map = new Map<number, number>();
    for (const num of questions) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }
    const entries = [...map.entries(), ].sort((a, b) => b[1] - a[1]);
    let count = 0;
    for (let i = 0; i < entries.length; i++) {
        count += entries[i][1];
        if (count >= N) {
            return i + 1;
        }
    }
    return 0;
}

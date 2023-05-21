function countSeniors (details: string[]): number {
    let result = 0;
    for (const detail of details) {
        const age = +detail.slice(11, 13);
        if (age > 60) {
            result++;
        }
    }
    return result;
}

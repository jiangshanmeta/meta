function mostPoints (questions: number[][]): number {
    const results = new Array<number>(questions.length + 1).fill(0);
    for (let i = 0; i < questions.length; i++) {
        const nextIndex = Math.min(
            i + questions[i][1] + 1,
            questions.length
        );
        results[nextIndex] = Math.max(
            results[nextIndex],
            results[i] + questions[i][0]
        );
        results[i + 1] = Math.max(results[i + 1], results[i]);
    }
    return results[results.length - 1];
}

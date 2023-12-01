function minProcessingTime (processorTime: number[], tasks: number[]): number {
    processorTime.sort((a, b) => a - b);
    tasks.sort((a, b) => b - a);
    let result = 0;
    for (let i = 0; i < processorTime.length; i++) {
        result = Math.max(result, processorTime[i] + tasks[4 * i]);
    }
    return result;
}

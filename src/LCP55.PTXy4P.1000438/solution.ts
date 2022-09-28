function getMinimumTime (time: number[], fruits: number[][], limit: number): number {
    let result = 0;
    for (const [type, num, ] of fruits) {
        result += time[type] * Math.ceil(num / limit);
    }
    return result;
}

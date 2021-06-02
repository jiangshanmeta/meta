function dietPlanPerformance (calories: number[], k: number, lower: number, upper: number): number {
    let result = 0;
    let sum = 0;
    for (let i = 0; i < k - 1; i++) {
        sum += calories[i];
    }
    for (let i = k - 1; i < calories.length; i++) {
        sum += calories[i];
        if (sum > upper) {
            result++;
        } else if (sum < lower) {
            result--;
        }
        sum -= calories[i - (k - 1)];
    }
    return result;
}

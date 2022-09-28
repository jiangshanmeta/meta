function numberOfWeeks (milestones: number[]): number {
    let sum = milestones[0];
    let max = milestones[0];
    for (let i = 1; i < milestones.length; i++) {
        sum += milestones[i];
        max = Math.max(max, milestones[i]);
    }
    const rest = sum - max;
    if (rest < max - 1) {
        return 2 * rest + 1;
    }

    return sum;
}

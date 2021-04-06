function minElements (nums: number[], limit: number, goal: number): number {
    const sum = nums.reduce((sum, item) => {
        return sum + item;
    }, 0);
    const diff = Math.abs(sum - goal);
    return Math.ceil(diff / limit);
}

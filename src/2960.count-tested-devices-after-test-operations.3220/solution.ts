function countTestedDevices (batteryPercentages: number[]): number {
    let r = 0;
    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] - r > 0) {
            r++;
        }
    }
    return r;
}

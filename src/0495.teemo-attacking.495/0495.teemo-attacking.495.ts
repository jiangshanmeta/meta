function findPoisonedDuration (timeSeries: number[], duration: number): number {
    let result = 0;
    let lastTime = 0;
    for (const time of timeSeries) {
        const maxTime = time + duration;
        if (maxTime > lastTime) {
            result += maxTime - Math.max(time, lastTime);
            lastTime = maxTime;
        }
    }
    return result;
}

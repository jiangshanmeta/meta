function hardestWorker (n: number, logs: number[][]): number {
    let staffId = n;
    let lastTime = 0;
    let maxTime = 0;
    for (let i = 0; i < logs.length; i++) {
        const time = logs[i][1] - lastTime;
        lastTime = logs[i][1];
        if (time > maxTime) {
            staffId = logs[i][0];
            maxTime = time;
        } else if (time === maxTime && logs[i][0] < staffId) {
            staffId = logs[i][0];
        }
    }

    return staffId;
}

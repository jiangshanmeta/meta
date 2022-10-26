function temperatureTrend (temperatureA: number[], temperatureB: number[]): number {
    let result = 0;
    let current = 0;
    for (let i = 1; i < temperatureA.length; i++) {
        const deltaA = normalize(temperatureA[i] - temperatureA[i - 1]);
        const deltaB = normalize(temperatureB[i] - temperatureB[i - 1]);
        if (deltaA === deltaB) {
            current++;
        } else {
            current = 0;
        }
        result = Math.max(result, current);
    }
    return result;
}

function normalize (n:number) {
    if (n > 0) {
        return 1;
    } else if (n < 0) {
        return -1;
    }
    return 0;
}

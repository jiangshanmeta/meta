function numPairsDivisibleBy60 (time: number[]): number {
    const frequencys = new Array<number>(60).fill(0);
    for (let i = 0; i < time.length; i++) {
        frequencys[time[i] % 60]++;
    }
    let result = 0;

    for (let i = 0; i < 31; i++) {
        if (frequencys[i] === 0) {
            continue;
        }
        if (i === 0 || i === 30) {
            result += frequencys[i] * (frequencys[i] - 1) / 2;
        } else {
            result += frequencys[i] * frequencys[60 - i];
        }
    }

    return result;
}

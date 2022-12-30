function captureForts (forts: number[]): number {
    let result = 0;
    let index = 0;

    while (index < forts.length) {
        if (forts[index] !== 0) {
            index++;
            continue;
        }
        if (index === 0) {
            while (index < forts.length && forts[index] === 0) {
                index++;
            }
            continue;
        }
        const left = forts[index - 1];
        let count = 0;
        while (index < forts.length && forts[index] === 0) {
            count++;
            index++;
        }

        if (index < forts.length) {
            const right = forts[index];
            if (left !== right) {
                result = Math.max(result, count);
            }
        }
    }
    return result;
}

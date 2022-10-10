function readBinaryWatch (turnedOn: number): string[] {
    const HOURS = [8, 4, 2, 1, ];
    const MINUTES = [32, 16, 8, 4, 2, 1, ];
    const result:string[] = [];
    for (let i = 0; i <= turnedOn; i++) {
        const hours:number[] = [];
        if (i === 0) {
            hours.push(0);
        } else {
            backTracking(HOURS, 0, i, 0, 11, hours);
        }
        const minutes:number[] = [];
        const minCount = turnedOn - i;
        if (minCount === 0) {
            minutes.push(0);
        } else {
            backTracking(MINUTES, 0, minCount, 0, 59, minutes);
        }

        for (const h of hours) {
            for (const m of minutes) {
                result.push(`${h}:${String(m).padStart(2, '0')}`);
            }
        }
    }
    return result;
}

function backTracking (candidates:number[], index:number, rest:number, sum:number, limit:number, result:number[]) {
    if (rest === 0) {
        result.push(sum);
        return;
    }

    if (index === candidates.length) {
        return;
    }

    backTracking(candidates, index + 1, rest, sum, limit, result);

    sum += candidates[index];
    if (sum > limit) {
        return;
    }
    backTracking(candidates, index + 1, rest - 1, sum, limit, result);
}

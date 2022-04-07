function convertTime (current: string, correct: string): number {
    let [h1, m1, ] = parseTime(current);
    const [h2, m2, ] = parseTime(correct);
    let result = 0;
    let diff = 0;

    if (m1 > m2) {
        diff = m2 + 60 - m1;
        h1++;
    } else if (m1 < m2) {
        diff = m2 - m1;
    }
    for (const num of [15, 5, ]) {
        if (diff >= num) {
            const rest = diff % num;
            result += (diff - rest) / num;
            diff = rest;
        }
    }

    result += diff;
    if (h2 >= h1) {
        result += h2 - h1;
    } else {
        result += 24 - (h1 - h2);
    }
    return result;
}

function parseTime (time:string) {
    return [+time.slice(0, 2), +time.slice(3), ] as const;
}

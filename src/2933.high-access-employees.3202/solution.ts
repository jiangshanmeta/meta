function findHighAccessEmployees (access_times: string[][]): string[] {
    const map = new Map<string, number[]>();
    for (const [id, time, ] of access_times) {
        const ts = (+time.slice(0, 2)) * 60 + (+time.slice(2));
        if (map.has(id)) {
            map.get(id)!.push(ts);
        } else {
            map.set(id, [ts, ]);
        }
    }
    const result:string[] = [];
    for (const [id, times, ] of map) {
        let flag = false;
        times.sort((a, b) => a - b);
        for (let i = 0; i < times.length - 2; i++) {
            if (times[i + 2] - times[i] < 60) {
                flag = true;
                break;
            }
        }
        if (flag) {
            result.push(id);
        }
    }
    return result;
}

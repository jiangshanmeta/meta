function findingUsersActiveMinutes (logs: number[][], k: number): number[] {
    const map = new Map<number, Set<number>>();
    for (const [id, time, ] of logs) {
        if (!map.has(id)) {
            map.set(id, new Set());
        }
        map.get(id).add(time);
    }
    const result:number[] = new Array(k).fill(0);
    for (const set of map.values()) {
        result[set.size - 1]++;
    }

    return result;
}

function minNumBooths (demand: string[]): number {
    const result = new Array<number>(26).fill(0);
    for (let i = 0; i < demand.length; i++) {
        const day = countDay(demand[i]);
        for (let i = 0; i < 26; i++) {
            result[i] = Math.max(result[i], day[i]);
        }
    }
    return result.reduce((sum, item) => sum + item, 0);
}

function countDay (str:string) {
    const result = new Array<number>(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        result[str.charCodeAt(i) - 97]++;
    }
    return result;
}

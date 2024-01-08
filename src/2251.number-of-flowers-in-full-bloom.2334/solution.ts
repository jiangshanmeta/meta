function fullBloomFlowers (flowers: number[][], people: number[]): number[] {
    const starts:number[] = [];
    const ends:number[] = [];
    for (let i = 0; i < flowers.length; i++) {
        starts.push(flowers[i][0]);
        ends.push(flowers[i][1] + 1);
    }
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    const peopleWithIndex = people.map((p, index) => {
        return {
            p,
            index,
        };
    }).sort((a, b) => a.p - b.p);
    const results = new Array<number>(people.length);
    let indexS = 0;
    let indexE = 0;
    let count = 0;
    for (const { p, index, } of peopleWithIndex) {
        while (indexS < starts.length && starts[indexS] <= p) {
            count++;
            indexS++;
        }
        while (indexE < ends.length && ends[indexE] <= p) {
            count--;
            indexE++;
        }
        results[index] = count;
    }

    return results;
}

function adventureCamp (expeditions: string[]): number {
    const allSet = new Set(expeditions[0].split('->'));
    let max = 0;
    let res = -1;
    for (let i = 1; i < expeditions.length; i++) {
        if (expeditions[i] === '') {
            continue;
        }
        const camps = expeditions[i].split('->');
        let count = 0;
        for (const camp of camps) {
            if (!allSet.has(camp)) {
                allSet.add(camp);
                count++;
            }
            if (count > max) {
                max = count;
                res = i;
            }
        }
    }
    return res;
}

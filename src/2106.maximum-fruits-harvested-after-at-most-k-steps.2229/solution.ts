function maxTotalFruits (fruits: number[][], startPos: number, k: number): number {
    const MAX_POSITION = Math.max(...fruits.map(item => item[0]));
    const prefixSums = new Array<number>(MAX_POSITION + 2).fill(0);
    let index = 0;
    let firstIndex = -1;
    for (let i = 1; i < prefixSums.length; i++) {
        if (index < fruits.length && fruits[index][0] === i - 1) {
            prefixSums[i] = fruits[index][1];
            if (fruits[index][0] < startPos) {
                firstIndex = index;
            }
            index++;
        }
        prefixSums[i] += prefixSums[i - 1];
    }

    let result = 0;
    let nextIndex = firstIndex + 1;
    while (firstIndex > -1 && startPos - fruits[firstIndex][0] <= k) {
        const position = fruits[firstIndex][0];
        const distance = startPos - position;
        const rest = Math.max(k - 2 * distance, 0);

        result = Math.max(
            result,
            prefixSums[Math.min(MAX_POSITION, startPos + rest) + 1] - prefixSums[position]
        );
        firstIndex--;
    }

    while (nextIndex < fruits.length && fruits[nextIndex][0] - startPos <= k) {
        const position = fruits[nextIndex][0];
        const distance = position - startPos;
        const rest = Math.max(k - 2 * distance, 0);
        result = Math.max(
            result,
            prefixSums[position + 1] - prefixSums[Math.max(startPos - rest, 0)]
        );

        nextIndex++;
    }

    return result;
}

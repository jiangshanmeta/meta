function minWastedSpace (packages: number[], boxes: number[][]): number {
    packages.sort((a, b) => a - b);
    const MAX_SIZE = packages[packages.length - 1];
    const prefix_sum = new Array<number>(MAX_SIZE + 2);
    const prefix_count = new Array<number>(MAX_SIZE + 2);
    prefix_count[0] = 0;
    prefix_sum[0] = 0;
    let index = 0;
    for (let i = 1; i < prefix_count.length; i++) {
        if (packages[index] === i - 1) {
            const item = packages[index++];
            let c = 1;
            while (index < packages.length && packages[index] === item) {
                c++;
                index++;
            }
            prefix_count[i] = prefix_count[i - 1] + c;
            prefix_sum[i] = prefix_sum[i - 1] + item * c;
        } else {
            prefix_count[i] = prefix_count[i - 1];
            prefix_sum[i] = prefix_sum[i - 1];
        }
    }

    let result = Infinity;
    boxes.forEach((box) => {
        box.sort((a, b) => a - b);
        if (box[box.length - 1] < MAX_SIZE) {
            return;
        }

        let sum = 0;
        for (let i = 0; i < box.length; i++) {
            const min = i === 0 ? 0 : box[i - 1] + 1;
            const max = Math.min(box[i], MAX_SIZE);

            sum += (prefix_count[max + 1] - prefix_count[min]) * box[i] - (prefix_sum[max + 1] - prefix_sum[min]);
            if (box[i] >= MAX_SIZE) {
                break;
            }
        }
        result = Math.min(result, sum);
    });
    return result === Infinity ? -1 : result % (10 ** 9 + 7);
}

function maxNumberOfApples (arr: number[]): number {
    arr.sort((a, b) => a - b);
    let sum = 0;
    let index = 0;
    while (index < arr.length) {
        sum += arr[index];
        if (sum > 5000) {
            break;
        }
        index++;
    }

    return index;
}

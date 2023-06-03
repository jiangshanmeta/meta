function removeTrailingZeros (num: string): string {
    const arr = num.split('');
    while (arr.length && arr[arr.length - 1] === '0') {
        arr.pop();
    }
    return arr.join('');
}

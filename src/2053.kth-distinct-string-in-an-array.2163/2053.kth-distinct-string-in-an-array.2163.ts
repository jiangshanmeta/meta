function kthDistinct (arr: string[], k: number): string {
    const map = new Map<string, boolean>();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], false);
        } else {
            map.set(arr[i], true);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!map.get(arr[i])) {
            continue;
        }
        k--;
        if (k === 0) {
            return arr[i];
        }
    }
    return '';
}

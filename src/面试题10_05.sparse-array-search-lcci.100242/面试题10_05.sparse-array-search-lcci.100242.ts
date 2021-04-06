function findString (words: string[], s: string): number {
    return binarySearch(words, s, 0, words.length);
}

function binarySearch (words:string[], s:string, left:number, right:number):number {
    if (right < left) {
        return -1;
    }
    const mid = left + ((right - left) >> 1);

    if (words[mid] === '') {
        const l = binarySearch(words, s, left, mid - 1);
        if (l === -1) {
            return binarySearch(words, s, mid + 1, right);
        }
        return l;
    } else if (words[mid] === s) {
        return mid;
    } else if (words[mid] > s) {
        return binarySearch(words, s, left, mid - 1);
    } else {
        return binarySearch(words, s, mid + 1, right);
    }
}

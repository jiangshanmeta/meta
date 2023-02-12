function pickGifts (gifts: number[], k: number): number {
    heapify(gifts);

    while (k) {
        if (gifts[0] === 1) {
            break;
        }
        gifts[0] = Math.floor(Math.sqrt(gifts[0]));
        sideDown(gifts, 0);
        k--;
    }
    return gifts.reduce((sum, item) => sum + item, 0);
}

function swap (arr:number[], i:number, j:number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function sideDown (arr:number[], index:number) {
    while (2 * index + 1 < arr.length) {
        let child = 2 * index + 1;
        if (child + 1 < arr.length && arr[child + 1] > arr[child]) {
            child++;
        }
        if (arr[index] < arr[child]) {
            swap(arr, index, child);
            index = child;
        } else {
            break;
        }
    }
}

function heapify (arr:number[]) {
    for (let i = (arr.length - 2) >> 1; i > -1; i--) {
        sideDown(arr, i);
    }
}

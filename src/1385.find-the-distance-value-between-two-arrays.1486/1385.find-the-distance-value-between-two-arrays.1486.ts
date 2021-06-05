function findTheDistanceValue (arr1: number[], arr2: number[], d: number): number {
    arr2.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (findClosest(arr2, arr1[i]) > d) {
            result++;
        }
    }
    return result;
}

function findClosest (arr:number[], target:number):number {
    if (arr[0] >= target) {
        return arr[0] - target;
    }
    let low = 0;
    let high = arr.length - 1;
    let index = -1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid] > target) {
            high = mid - 1;
        } else {
            index = Math.max(index, mid);
            low = mid + 1;
        }
    }

    if (index + 1 < arr.length && arr[index + 1] - target < target - arr[index]) {
        return arr[index + 1] - target;
    }
    return target - arr[index];
}

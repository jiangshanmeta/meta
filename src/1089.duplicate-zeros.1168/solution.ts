/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros (arr: number[]): void {
    let index1 = 0;
    let index2 = 0;
    while (index2 < arr.length) {
        if (arr[index1] === 0) {
            index2 += 2;
        } else {
            index2++;
        }
        index1++;
    }
    index1--;
    index2--;
    while (index1 > -1) {
        if (arr[index1] === 0) {
            if (index2 === arr.length) {
                index1--;
                index2--;
                arr[index2--] = 0;
            } else {
                arr[index2--] = 0;
                arr[index2--] = 0;
                index1--;
            }
        } else {
            arr[index2--] = arr[index1--];
        }
    }
}

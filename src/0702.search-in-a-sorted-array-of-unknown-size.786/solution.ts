/**
 * class ArrayReader {
 *      // This is the ArrayReader's API interface.
 *      // You should not implement it, or speculate about its implementation
 *      get(index: number): number {};
 *  };
 */

function search (reader: ArrayReader, target: number): number {
    let low = 0;
    let high = 20000;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const calc = reader.get(mid);
        if (calc === 2147483647) {
            high = mid - 1;
            continue;
        }
        if (calc > target) {
            high = mid - 1;
        } else if (calc < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

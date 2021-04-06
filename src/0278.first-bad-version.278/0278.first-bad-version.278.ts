/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const solution = function (isBadVersion: any) {
    return function (n: number): number {
        let low = 1;
        let high = n;
        while (low <= high) {
            const mid = low + ((high - low) >>> 1);
            const is = <boolean>isBadVersion(mid);
            if (is) {
                n = Math.min(n, mid);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return n;
    };
};

function findDifferentBinaryString (nums: string[]): string {
    const N = nums.length;
    const set = new Set(nums);
    let result = '';
    const backTracking = (candidate:string) => {
        if (candidate.length === N) {
            if (!set.has(candidate)) {
                result = candidate;
            }
            return;
        }
        !result && backTracking(candidate + '0');
        !result && backTracking(candidate + '1');
    };
    backTracking('');

    return result;
}

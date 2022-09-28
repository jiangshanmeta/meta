function nextGreaterElement (nums1: number[], nums2: number[]): number[] {
    const numIndexMap = new Map<number, number>();
    const stackNum:number[] = [];
    const stackIndex:number[] = [];
    const helper:number[] = new Array(nums2.length).fill(-1);
    for (let i = 0; i < nums2.length; i++) {
        numIndexMap.set(nums2[i], i);
        while (stackNum.length && nums2[i] > stackNum[stackNum.length - 1]) {
            helper[stackIndex.pop()] = nums2[i];
            stackNum.pop();
        }
        stackIndex.push(i);
        stackNum.push(nums2[i]);
    }
    return nums1.map((item) => {
        return helper[numIndexMap.get(item)!];
    });
}

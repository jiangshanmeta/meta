function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>();
    for(let i=0;i<nums2.length;i++){
        if(set1.has(nums2[i])){
            set2.add(nums2[i]);
        }
    }
    return [...set2]
};
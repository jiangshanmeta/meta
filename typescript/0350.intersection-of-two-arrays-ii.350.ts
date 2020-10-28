function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = new Map<number,number>();
    for(let i=0;i<nums1.length;i++){
        if(map1.has(nums1[i])){
            map1.set(nums1[i],(<number>map1.get(nums1[i]))+1);
        }else{
            map1.set(nums1[i],1);
        }
    }
    const result:number[] = [];
    for(let i=0;i<nums2.length;i++){
        if(map1.has(nums2[i])){
            const count = <number>map1.get(nums2[i]);
            if(count>0){
                result.push(nums2[i]);
                map1.set(nums2[i],count-1);
            }
        }
    }
    return result
};
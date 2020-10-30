function pivotIndex(nums: number[]): number {
    const rightSums:number[] = new Array(nums.length);
    rightSums[rightSums.length-1] = 0;
    for(let i=nums.length-2;i>-1;i--){
        rightSums[i] = rightSums[i+1]+nums[i+1];
    }
    let left = 0;
    for(let i=0;i<nums.length;i++){
        if(left === rightSums[i]){
            return i;
        }
        left += nums[i];
    }
    return -1;
};
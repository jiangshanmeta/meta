function productExceptSelf(nums: number[]): number[] {
    const result:number[] = new Array(nums.length);
    let before = 1;
    for(let i=0;i<nums.length;i++){
        result[i] = before;
        before *= nums[i];
    }
    let after = 1;
    for(let i=nums.length-1;i>-1;i--){
        result[i] *= after;
        after *= nums[i];
    }
    return result;
};
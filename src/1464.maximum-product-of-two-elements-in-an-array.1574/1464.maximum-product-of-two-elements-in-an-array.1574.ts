function maxProduct(nums: number[]): number {
    let first = 0;
    let second = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=first){
            second = first;
            first = nums[i];
        }else if(nums[i]>second){
            second = nums[i]
        }
    }
    return (first-1)*(second-1)
};
function firstMissingPositive(nums: number[]): number {
    let index = 0;
    while(index<nums.length){
        if(nums[index]<1 || nums[index]>nums.length || nums[index] === index+1){
            index++;
            continue;
        }
        const num = nums[index];
        if(nums[num-1] === num){
            index++;
            continue;
        }
        nums[index] = nums[num-1];
        nums[num-1] = num;
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== i+1){
            return i+1;
        }
    }
    return nums.length+1;
};
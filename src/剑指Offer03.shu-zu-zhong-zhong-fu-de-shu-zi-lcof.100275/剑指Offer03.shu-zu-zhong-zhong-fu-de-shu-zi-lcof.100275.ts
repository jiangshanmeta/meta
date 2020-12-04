function findRepeatNumber(nums: number[]): number {
    let index = 0;
    while(index<nums.length){
        if(nums[index] === index){
            index++;
            continue;
        }
        const num = nums[index];
        if(nums[num] === num){
            return num;
        }
        nums[index] = nums[num];
        nums[num] = num;
    }
    return 0;
};
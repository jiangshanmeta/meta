function findDuplicate(nums: number[]): number {
    let index = 0;
    let result = 0;
    while(index<nums.length){
        if(nums[index] === index+1){
            index++;
            continue;
        }
        const num = nums[index];
        if(nums[num-1] === num){
            result = num;
            break;
        }
        nums[index] = nums[num-1];
        nums[num-1] = num;
    }
    return result;
};
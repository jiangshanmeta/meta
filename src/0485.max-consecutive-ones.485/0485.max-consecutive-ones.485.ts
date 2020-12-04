function findMaxConsecutiveOnes(nums: number[]): number {
    let result:number = 0;
    let index:number = 0;
    while(index<nums.length){
        if(nums[index] === 0){
            index++;
            continue;
        }
        let count = 0;
        while(index<nums.length && nums[index] === 1){
            index++;
            count++;
        }
        result = Math.max(result,count);
    }
    return result;
};
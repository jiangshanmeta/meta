function findErrorNums(nums: number[]): number[] {
    let duplicate = -1;
    const set = new Set<number>();
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            duplicate = nums[i];
        }else{
            set.add(nums[i]);
        }
        sum += nums[i]
    }
    const n = nums.length;
    return [
        duplicate,
        duplicate + n*(n+1)/2 - sum
    ]
};
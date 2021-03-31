function kLengthApart(nums: number[], k: number): boolean {
    let index = nums.indexOf(1);
    if(index === -1){
        return true;
    }
    index++;
    let zeroCount = 0;
    while(index<nums.length){
        if(nums[index] === 1){
            if(zeroCount<k){
                return false;
            }
            zeroCount = 0;
        }else{
            zeroCount++;
        }
        index++;
    }
    return true;
};
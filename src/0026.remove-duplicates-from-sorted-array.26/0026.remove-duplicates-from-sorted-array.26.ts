function removeDuplicates(nums: number[]): number {
    if(nums.length<2){
        return nums.length;
    }

    let index1 = 1;
    let index2 = 1;
    let prev = nums[0];
    while(index1<nums.length){
        if(nums[index1] !== prev){
            prev = nums[index1];
            nums[index2++] = nums[index1++]
        }else{
            index1++;
        }
    }
    return index2;
};
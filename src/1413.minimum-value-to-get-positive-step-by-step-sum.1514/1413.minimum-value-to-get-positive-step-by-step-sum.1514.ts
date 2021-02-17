function minStartValue(nums: number[]): number {
    let minVal = nums[0];
    let sum = nums[0];
    for(let i=1;i<nums.length;i++){
        sum += nums[i];
        minVal = Math.min(sum,minVal);
    }
    if(minVal>0){
        return 1;
    }else{
        return 1-minVal;
    }
};
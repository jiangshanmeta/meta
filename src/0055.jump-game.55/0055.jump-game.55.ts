function canJump(nums: number[]): boolean {
    let left = 0;
    let right = 0;
    while(left<=right){
        let newRight = right;
        for(let i=left;i<=right;i++){
            newRight = Math.max(newRight,nums[i]+i);
        }
        if(newRight>=nums.length-1){
            return true;
        }
        left = right+1;
        right = newRight;
    }
    return false;
};
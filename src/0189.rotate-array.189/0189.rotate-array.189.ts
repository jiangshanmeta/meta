/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k %= nums.length;
    if(k === 0){
        return;
    }
    reverse(nums,nums.length-k,nums.length-1);
    reverse(nums,0,nums.length-k-1);
    reverse(nums,0,nums.length-1);
};

function reverse(nums:number[],left:number,right:number){
    while(left<right){
        const tmp = nums[right];
        nums[right--] = nums[left];
        nums[left++] = tmp;
    }
}
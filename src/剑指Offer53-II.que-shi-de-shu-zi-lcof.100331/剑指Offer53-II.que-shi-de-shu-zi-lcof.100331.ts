// 注意到其实就是差一个数
function missingNumber(nums: number[]): number {
    return nums.length*(nums.length+1)/2 - nums.reduce((a,b)=>{
        return a+b;
    },0);
};
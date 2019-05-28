/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // 本质就是自定义排序
    nums.sort((a,b)=>{
        a = a + '';
        b = b + '';
        let L = Math.min(a.length,b.length);
        // 从左到右看 先比较都有的位数
        for(let i=0;i<L;i++){
            if(a[i] !== b[i]){
                return b[i]-a[i];
            }
        }
        // 有的位数多，那就试试看那种排列更大
        return (b+a)-(a+b);
    });
    
    // 一个恶心的corner case 都是0
    if(nums[0] === 0){
        return "0";
    }
    
    return nums.join("");
};
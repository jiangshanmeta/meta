/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 我们要找一个连续子序列(长度最小为2) 其和为k的n倍 n为整数 k为整数
// 如果k为0 则我们只需要判断是否有连续的0存在即可
// 如果k不为0 则和能整除k
// 注意nums数组中的元素非负数

// 我们选前m个元素 其和%k为 mod1
// 若按需添加几个(包含1)元素后 其和%k 仍然为 mod1
// 可能的情况有：
// 1. 添加的元素是 0
// 2. 添加的元素(一个元素)能恰好能整除k
// 3. 添加的子序列的恰好能整除k

// 对于第一种情况 如果是单独出现的0跳过 如果是连续的0 和为0 能整除（我被这个特殊情况坑了）
// 对于第二种情况 由于限制了子序列长度最小是2 需要结合前一个元素或者后一个元素判断

var checkSubarraySum = function(nums, k) {
    if(k === 0){
        for(let i=0;i<nums.length-1;i++){
            if(nums[i] === 0 && nums[i+1] === 0){
                return true;
            }
        }
        return false;
    }else{
        let sum = nums[0];
        const modMap = {};
        modMap[sum%k] = true;
        for(let i=1;i<nums.length;i++){
            if(nums[i] === 0){
                if(nums[i-1] === 0){
                    return true;
                }
                continue;
            }
            
            if(nums[i]%k === 0){
                if( nums[i-1]%k===0 || (i<nums.length-1 && nums[i+1]%k === 0 ) ){
                    return true;
                }
                continue;
            }
            
            
            sum += nums[i];
            if(sum%k === 0 || modMap[sum%k] ){
                return true;
            }
            
            modMap[sum%k] = true;
        }

        return false;
    }
};
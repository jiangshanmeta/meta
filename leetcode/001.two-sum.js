/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// ①最简单粗暴的方法是选中一个元素（第一次循环），然后在剩余元素中看是否有对应配对的元素(第二次循环)
// 这样时间复杂度是 O(n^2)

// ②优化一点的做法是用hash，键为元素值，值为元素的索引
// 先遍历一遍形成hash，然后依次选中元素，在hash中寻找是否有排在后面的元素(索引比较)
// 时间复杂度是O(n)了

// ③再优化一点 不是找排在后面的可配对元素，而是找排在前面的可配对元素(在hash中寻找)
// 不需要单独循环一遍构造hash而是在线构造(也免去了比较索引这一步)
// 时间复杂度依然是O(n)

var twoSum = function(nums, target) {
    // 缓存没有配对的元素
    var hash = {};
    var tmp;
    for(var i = 0;i<nums.length;i++){
        tmp = target - nums[i];
        // 看以前没有配对的元素中有没有可配对的元素
        if(hash[tmp] !== undefined){
            return [hash[tmp],i];
        }
        hash[nums[i]] = i;
    }
};
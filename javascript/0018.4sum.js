/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    nums.sort((a,b)=>a-b);
    let index1 = 0;
    while(index1<nums.length-3){
        // index1固定 转化为3Sum了
        let index2 = index1+1;
        while(index2<nums.length-2){
            let index3 = index2+1;
            let index4 = nums.length-1;
            while(index3<index4){
                const sum = nums[index1]+nums[index2]+nums[index3]+nums[index4];
                if(sum>target){
                    index4--;
                }else if(sum<target){
                    index3++;
                }else{
                    result.push([nums[index1],nums[index2],nums[index3],nums[index4] ]);
                    const val3 = nums[index3++];
                    const val4 = nums[index4--];
                    // 跳过重复元素
                    while(index3<index4 && nums[index3] === val3){
                        index3++;
                    }
                    while(index3<index4 && nums[index4] === val4){
                        index4--;
                    }
                }
            }
            // 跳过重复元素
            const val2 = nums[index2++];
            while(index2<nums.length-2 && nums[index2] === val2){
                index2++;
            }
        }
        // 跳过重复元素
        const val1 = nums[index1++];
        while(index1<nums.length-3 && nums[index1] === val1){
            index1++;
        }
        
        
    }
    return result;
};
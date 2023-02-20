/*
最原始的实现
function minImpossibleOR(nums: number[]): number {
    nums.sort((a,b)=>a-b);
    let lastLength = 0;
    for(const num of nums){
        const str = num.toString(2);

        if(str.length === lastLength){
            continue
        }

        if(str.length !== lastLength+1){

            return 1<<(lastLength)
        }
        if(num !== (1<<lastLength)){
            return 1<<(lastLength)
        }

        lastLength = str.length;
    }

    return 1<<(nums[nums.length-1].toString(2).length)
};

*/

// 找数组中最小的不存在的2的幂
function minImpossibleOR (nums: number[]): number {
    const set = new Set(nums);
    let result = 1;
    while (set.has(result)) {
        result <<= 1;
    }
    return result;
}

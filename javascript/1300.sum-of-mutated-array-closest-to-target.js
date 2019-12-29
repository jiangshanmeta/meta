/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    let sum = arr.reduce((sum,item)=>{
        return sum+item;
    },0);
    // 如果总和小于等于target 那么一个也不能动 所以返回数组中最大值
    if(sum<=target){
        return Math.max(...arr);
    }
    // 现在总和大于target了
    // 从小到大排序
    arr.sort((a,b)=>a-b);
    // 初始 改成0 因为数组非负
    let result = 0;
    let diff = target;
    
    let lastChangedSum = 0;
    sum = 0;
    for(let i=0;i<arr.length;i++){
        // 尝试把后面的改成当前
        const curChangedSum = sum + arr[i]*(arr.length-i);
        const curDiff = Math.abs(target-curChangedSum);
        // 改成上一个偏小 改成这一个偏大 利用二分找最近的
        if(lastChangedSum<=target && curChangedSum>=target){
            const count = arr.length-i;
            let low = result;
            let high = arr[i];
            while(low<=high){
                const mid = (low+high)>>1;
                const curChangedSum = sum+mid*count;
                const curDiff = Math.abs(curChangedSum-target);
                if(curDiff<diff){
                    result = mid;
                    diff = curDiff;
                }else if(curDiff === diff){
                    result = Math.min(result,mid);
                }
                if(curChangedSum>target){
                    high = mid-1;
                }else{
                    low = mid+1;
                }
                
                
            }
            break;
        }
        
        // 现在依然偏小 但是更接近了
        diff = curDiff;
        lastChangedSum = curChangedSum;
        sum += arr[i];
        
        result = arr[i];
    }
    
    return result;
};
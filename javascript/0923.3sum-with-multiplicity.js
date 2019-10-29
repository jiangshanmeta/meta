/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
const mod = 10**9+7;
var threeSumMulti = function(A, target) {
    // 基本思路依然是利用双指针，不同之处在于重复元素的处理
    A.sort((a,b)=>a-b);
    let index1 = 0;
    let result = 0;
    while(index1<A.length-2){
        let index2 = index1+1;
        let index3 = A.length-1;
        const val1 = A[index1];
        let curTarget = target-A[index1];
        // 计算A[index1]的数量
        let count1 = 1;
        index1++;
        while(index1<A.length && A[index1] === val1){
            index1++;
            count1++
        }        
        while(index2<index3){
            const sum = A[index2]+A[index3];
            if(sum>curTarget){
                index3--;
            }else if(sum<curTarget){
                index2++;
            }else{
                const val2 = A[index2++];
                const val3 = A[index3--];
                let count2 = 1;
                let count3 = 1;

                while(index2<A.length && A[index2] === val2){
                    count2++;
                    index2++;
                }
                // 这里有个-1 考虑这么一个情况，val2和val3紧挨着，经过上面的操作index2指向了第一个val3
                while(index3>index2-1 && A[index3] === val3){
                    index3--;
                    count3++;
                }
                // 排列组合
                if(val1 === val2 && val2 === val3){
                    result = (result+cn3(count1))%mod;
                }else if(val1 === val2){
                    result = (result + cn2(count1)*count3)%mod;
                }else if(val2 === val3){
                    result = (result+count1*cn2(count2))%mod;
                }else{
                    result = (result+count1*count2*count3)%mod;
                }

                
            }
            
        }
    }
    return result;
};
    
function cn2(n){
    return n*(n-1)/2;
}
    
function cn3(n){
    return n*(n-1)*(n-2)/6;
}
    
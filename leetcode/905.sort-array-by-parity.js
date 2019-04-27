/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let left = 0;
    let right = A.length-1;
    while(left<right){
        // 找到第一个是奇数的元素
        while(left<right && A[left]%2 === 0){
            left++;
        }
        // 找到第一个是偶数的元素
        while(left<right && A[right]%2 === 1){
            right--;   
        }
        // 交换 使得偶数元素在前 奇数元素在后
        if(left<right){
            const tmp = A[left];
            A[left] = A[right];
            A[right] = tmp;
            left++;
            right--;
        }
    }
    
    return A;
};
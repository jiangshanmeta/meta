function sortArrayByParity(A: number[]): number[] {
    let left = 0;
    let right = A.length-1;
    while(left<right){
        while(left<right && A[left]%2 === 0){
            left++;
        }
        while(left<right && A[right]%2 === 1){
            right--;
        }
        if(left<right){
            const tmp = A[left];
            A[left++] = A[right];
            A[right--] = tmp;
        }
    }
    return A;
};
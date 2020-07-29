/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let add = 0;
    let index = A.length-1;
    while(index>-1 && K>0){
        const Kdigit = K%10;
        K = (K-Kdigit)/10;
        const newVal = A[index]+add+Kdigit;
        A[index] = newVal%10;
        add = (newVal-A[index])/10;
        index--;
    }
    if(K>0){
        K += add;
        while(K>0){
            const Kdigit = K%10;
            K = (K-Kdigit)/10;
            A.unshift(Kdigit);
        }
    }else if(index>-1){
        while(add>0 && index>-1){
            const newVal = add + A[index];
            A[index] = newVal%10;
            add = (newVal-A[index])/10;
            index--;
        }
        if(add>0){
            A.unshift(add);
        }
    }else if(add>0){
        A.unshift(add);
    }
    return A;
};
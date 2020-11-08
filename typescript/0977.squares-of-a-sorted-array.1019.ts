function sortedSquares(A: number[]): number[] {
    if(A[0]>=0){
        return A.map(item=>item*item);    
    }else if(A[A.length-1]<=0){
        return A.reverse().map(item=>item*item);
    }else{
        let midIndex = 0;
        let diff = -A[0];
        let low = 0;
        let high = A.length-1;
        while(low<=high){
            const mid = (low+high)>>>1;
            if(A[mid]>0){
                high = mid-1;
            }else{
                const newDiff = -A[mid];
                if(newDiff<diff){
                    diff = newDiff;
                    midIndex = mid;
                }else if(newDiff>diff){
                    low = mid+1;
                }else{
                    midIndex = Math.max(midIndex,mid);
                    low = mid+1;
                }
            }
        }
        const result:number[] = [];
        let left = midIndex;
        let right = midIndex+1;
        while(left>-1 && right<A.length){
            const leftVal = Math.abs(A[left]);
            const rightVal = Math.abs(A[right]);
            if(leftVal<rightVal){
                result.push(leftVal*leftVal);
                left--;
            }else{
                result.push(rightVal*rightVal);
                right++;
            }
        }
        while(left>-1){
            result.push(Math.pow(A[left--],2));
        }
        while(right<A.length){
            result.push(Math.pow(A[right++],2));
        }
        return result;
    }
};
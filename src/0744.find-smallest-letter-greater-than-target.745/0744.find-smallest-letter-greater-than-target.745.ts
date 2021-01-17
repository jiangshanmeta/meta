function nextGreatestLetter(letters: string[], target: string): string {
    if(target>=letters[letters.length-1]){
        return letters[0];
    }
    let result = letters.length-1;
    let low = 0;
    let high = letters.length-1;
    while(low<=high){
        const mid = low + ((high-low)>>1);

        if(letters[mid]>target){
            result = Math.min(result,mid);
            high = mid-1;
        }else{
            low = mid+1;
        }
    }

    return letters[result]
};
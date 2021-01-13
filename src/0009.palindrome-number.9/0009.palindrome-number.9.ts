function isPalindrome(x: number): boolean {
    if(x<0){
        return false;
    }
    const helper:number[] = [];
    while(x){
        const digit = x%10;
        helper.push(digit);
        x = (x-digit)/10;
    }
    let left = 0;
    let right = helper.length-1;
    while(left<right){
        if(helper[left++] !== helper[right--]){
            return false;
        }
    }
    return true;
};
function reverseOnlyLetters(S: string): string {
    const sList:string[] = S.split('');
    let left = 0;
    let right = sList.length-1;
    while(left<right){
        while(left<right && !isLetter(sList[left].charCodeAt(0))){
            left++;
        }
        while(left<right && !isLetter(sList[right].charCodeAt(0))){
            right--;
        }
        if(left<right){
            const tmp = sList[left];
            sList[left++] = sList[right];
            sList[right--] = tmp;
        }
    }
    return sList.join('');
};

function isLetter(code:number):boolean{
    return (code>96 && code<123) || (code>64 && code<91);
}
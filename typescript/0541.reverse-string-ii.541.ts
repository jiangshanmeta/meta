function reverseStr(s: string, k: number): string {
    const sList = s.split('');
    for(let i=0;i<sList.length;i+=2*k){
        reverse(sList,i,Math.min(sList.length-1,i+k-1));
    }
    return sList.join('');
};

function reverse(sList:string[],left:number,right:number){
    while(left<right){
        const tmp = sList[left];
        sList[left++] = sList[right];
        sList[right--] = tmp;
    }
}
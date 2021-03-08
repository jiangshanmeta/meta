function reverseLeftWords(s: string, n: number): string {
    n %= s.length;
    if(n === 0){
        return s;
    }
    const list = s.split('');
    reverse(list,0,n-1);
    reverse(list,n,list.length-1);
    reverse(list,0,list.length-1);
    return list.join('');
};

function reverse<T>(list:T[],left:number,right:number){
    while(left<right){
        const tmp = list[left];
        list[left] = list[right];
        list[right] = tmp;
        left++;
        right--;
    }
}
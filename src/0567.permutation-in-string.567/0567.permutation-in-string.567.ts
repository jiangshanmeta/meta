function checkInclusion(s1: string, s2: string): boolean {
    if(s1.length>s2.length){
        return false;
    }
    const counts1:number[] = new Array(26).fill(0);
    for(let i=0;i<s1.length;i++){
        counts1[s1.charCodeAt(i)-97]++;
    }
    const counts2:number[] = new Array(26).fill(0);
    for(let i=0;i<s1.length-1;i++){
        counts2[s2.charCodeAt(i)-97]++;
    }
    for(let i=s1.length-1;i<s2.length;i++){
        counts2[s2.charCodeAt(i)-97]++;
        if(match(counts1,counts2)){
            return true;
        }
        counts2[s2.charCodeAt(i-s1.length+1)-97]--;
    }
    return false;
};

function match(arr1:number[],arr2:number[]){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
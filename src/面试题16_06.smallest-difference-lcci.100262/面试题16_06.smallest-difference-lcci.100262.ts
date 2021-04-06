function smallestDifference(a: number[], b: number[]): number {
    a.sort((c,d)=>c-d);
    b.sort((c,d)=>c-d);
    let result = Math.abs(a[0]-b[0]);
    let index1 = 0;
    let index2 = 0;
    while(index1<a.length && index2<b.length){
        if(a[index1]>b[index2]){
            result = Math.min(result,a[index1]-b[index2++]);
        }else if(a[index1]<b[index2]){
            result = Math.min(result,b[index2]-a[index1++]);
        }else{
            return 0;
        }
    }
    return result;
};
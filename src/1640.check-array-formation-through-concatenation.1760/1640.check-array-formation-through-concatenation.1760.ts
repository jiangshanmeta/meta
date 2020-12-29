function canFormArray(arr: number[], pieces: number[][]): boolean {
    const map = new Map<number,number>();
    for(let i=0;i<pieces.length;i++){
        for(let j=0;j<pieces[i].length;j++){
            map.set(pieces[i][j],i);
        }
    }
    let index1 = 0;
    while(index1<arr.length){
        if(!map.has(arr[index1])){
            return false;
        }
        const sub = pieces[map.get(arr[index1])!];
        let index2 = 0;
        while(index2<sub.length){
            if(sub[index2] !== arr[index1]){
                return false;
            }
            index1++;
            index2++;
        }
    }
    return true;
};
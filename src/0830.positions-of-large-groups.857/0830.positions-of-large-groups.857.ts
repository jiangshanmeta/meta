function largeGroupPositions(s: string): number[][] {
    const result:number[][] = [];
    let index = 0;
    while(index<s.length){
        const c = s[index++];
        let count = 1;
        while(index<s.length && s[index] === c){
            count++;
            index++;
        }
        if(count>2){
            result.push([
                index-count,
                index-1,
            ])
        }

    }

    return result;
};
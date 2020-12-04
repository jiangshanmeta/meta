function customSortString(S: string, T: string): string {
    const map = new Map<string,number>();
    for(let i=0;i<T.length;i++){
        if(map.has(T[i])){
            map.set(T[i],<number>map.get(T[i])+1);
        }else{
            map.set(T[i],1);
        }
    }
    const result:string[] = [];
    const set = new Set(S);

    for(let i=0;i<S.length;i++){
        if(map.has(S[i])){
            const num = <number>map.get(S[i]);
            for(let j=0;j<num;j++){
                result.push(S[i]);
            }
        }
    }
    for(let i=0;i<T.length;i++){
        if(!set.has(T[i])){
            result.push(T[i])
        }
    }
    return result.join('');
};
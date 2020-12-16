function uncommonFromSentences(A: string, B: string): string[] {
    const mapA = new Map<string,number>();
    const listA = A.split(' ');
    const setA:string[] = []; 
    for(let i=0;i<listA.length;i++){
        if(mapA.has(listA[i])){
            mapA.set(listA[i],2);
        }else{
            mapA.set(listA[i],1);
            setA.push(listA[i]);
        }
    }

    const mapB = new Map<string,number>();
    const listB = B.split(' ');
    const setB:string[] = [];
    for(let i=0;i<listB.length;i++){
        if(mapB.has(listB[i])){
            mapB.set(listB[i],2);
        }else{
            mapB.set(listB[i],1)
            setB.push(listB[i]);
        }
    }

    const result:string[] = [];
    for(let i=0;i<setA.length;i++){
        if(mapA.get(setA[i]) === 2){
            continue;
        }
        if(!mapB.has(setA[i])){
            result.push(setA[i]);
        }
    }
    for(let i=0;i<setB.length;i++){
        if(mapB.get(setB[i]) === 2){
            continue;
        }
        if(!mapA.has(setB[i])){
            result.push(setB[i]);
        }
    }


    return result
};
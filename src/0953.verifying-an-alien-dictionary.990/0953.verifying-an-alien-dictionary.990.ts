function isAlienSorted(words: string[], order: string): boolean {
    const map = new Map<string,number>();
    for(let i=0;i<order.length;i++){
        map.set(order[i],i);
    }
    for(let i=1;i<words.length;i++){
        const minLength = Math.min(words[i].length,words[i-1].length);
        let bigger = false;
        for(let j=0;j<minLength;j++){
            const diff = map.get(words[i][j])-map.get(words[i-1][j]);
            if(diff<0){
                return false;
            }
            if(diff>0){
                bigger = true;
                break;
            }
        }
        if(!bigger && words[i-1].length>words[i].length){
            return false;
        }

    }

    return true;
};
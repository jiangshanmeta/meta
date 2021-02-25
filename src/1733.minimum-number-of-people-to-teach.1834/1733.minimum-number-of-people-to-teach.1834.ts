function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    const langSets = languages.map((lang)=>{
        return new Set(lang)
    });
    const visited = new Set<number>();
    const counts:number[] = new Array(n+1).fill(0);

    for(let [a,b] of friendships){
        if(hasCommon(langSets[a-1],langSets[b-1])){
            continue;
        }
        if(!visited.has(a)){
            visited.add(a);
            languages[a-1].forEach((lang)=>{
                counts[lang]++;
            })
        }
        if(!visited.has(b)){
            visited.add(b);
            languages[b-1].forEach((lang)=>{
                counts[lang]++;
            });
        }
    }
    let result = visited.size;
    for(let i=1;i<counts.length;i++){
        result = Math.min(result,visited.size-counts[i])
    }

    return result
};

function hasCommon(set1:Set<number>,set2:Set<number>):boolean{
    for(let item of set1){
        if(set2.has(item)){
            return true
        }
    }
    return false;
}
function arrayRankTransform(arr: number[]): number[] {
    const sorted = [...new Set(arr)].sort((a,b)=>a-b);

    const valueIndexMap = sorted.reduce((map,item,index)=>{
        map.set(item,index+1)
        return map;
    },new Map<number,number>());

    return arr.map((val)=>{
        return valueIndexMap.get(val)!;
    });
};
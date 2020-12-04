function alertNames(keyName: string[], keyTime: string[]): string[] {
    const map = new Map<string,number[]>();
    for(let i=0;i<keyName.length;i++){
        const ts:number = Number(keyTime[i].slice(0,2))*60+Number(keyTime[i].slice(3));
        if(map.has(keyName[i])){
            const list = map.get(keyName[i]) as number[];
            list.push(ts);
        }else{
            const list:number[] = [ts];
            map.set(keyName[i],list);
        }
    }
    const result:string[] = [];
    for(let [name,times] of map.entries()){
        times.sort((a,b)=>a-b);
        for(let i=2;i<times.length;i++){
            if(times[i-2]>=times[i]-60){
                result.push(name);
                break;
            }
        }
    }
    result.sort();
    return result;
};
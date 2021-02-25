function minimumHammingDistance(source: number[], target: number[], allowedSwaps: number[][]): number {
    const graph = new Map<number,number[]>();
    for(let [a,b] of allowedSwaps){
        if(!graph.has(a)){
            graph.set(a,[]);
        }
        if(!graph.has(b)){
            graph.set(b,[]);
        }
        graph.get(a)!.push(b);
        graph.get(b)!.push(a);
    }
    const visited:boolean[] = new Array(source.length).fill(false);
    let result = 0;
    for(let i=0;i<source.length;i++){
        if(visited[i]){
            continue;
        }
        if(!graph.has(i)){
            if(source[i] !== target[i]){
                result++;
            }
            continue;
        }
        const indexs:number[] = [];
        dfs(graph,visited,indexs,i);
        const subSource = indexs.map(index=>source[index]);
        const subTarget = indexs.map(index=>target[index]);
        subSource.sort((a,b)=>a-b);
        subTarget.sort((a,b)=>a-b);
        result += findDisMatch(subSource,subTarget);
    }

    return result;
};

function findDisMatch(source:number[],target:number[]):number{
    let result = 0;
    let index1 = 0;
    let index2 = 0;
    while(index1<source.length && index2<target.length){
        if(source[index1] === target[index2]){
            index1++;
            index2++;
            result++;
            continue;
        }
        if(source[index1]<target[index2]){
            index1++;
        }else{
            index2++;
        }
    }
    return source.length-result;
}

function dfs(graph:Map<number,number[]>,visited:boolean[],indexs:number[],index:number){
    if(visited[index]){
        return;
    }
    visited[index] = true;
    indexs.push(index);
    const edges = graph.get(index)!;
    for(let e of edges){
        dfs(graph,visited,indexs,e);
    }
}
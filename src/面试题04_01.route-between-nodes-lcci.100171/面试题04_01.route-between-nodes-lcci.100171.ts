function findWhetherExistsPath(n: number, graph: number[][], start: number, target: number): boolean {
    if(start === target){
        return true;
    }
    const graphMap = new Map<number,number[]>();
    for(const [from,to] of graph){
        if(from === to){
            continue;
        }
        if(graphMap.has(from)){
            graphMap.get(from)!.push(to);
        }else{
            graphMap.set(from,[to]);
        }
    }
    const visited:boolean[] = new Array(n).fill(false);
    const stack:number[] = [start];
    visited[start] = true;
    while(stack.length){
        const node = stack.pop()!;
        if(!graphMap.has(node)){
            continue;
        }
        const neighbours = graphMap.get(node)!;
        for(let i=0;i<neighbours.length;i++){
            const index = neighbours[i];
            if(visited[index]){
                continue;
            }
            if(index === target){
                return true;
            }
            visited[index] = true;
            stack.push(index);
        }

    }
    return false;
};
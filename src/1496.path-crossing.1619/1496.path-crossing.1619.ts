function isPathCrossing(path: string): boolean {
    const set = new Set<string>();
    set.add('0,0');
    let x = 0;
    let y = 0;
    const deltaXMap = new Map([
        ['N',0],
        ['S',0],
        ['E',1],
        ['W',-1]
    ])
    const deltaYMap = new Map([
        ['N',1],
        ['S',-1],
        ['E',0],
        ['W',0]
    ])

    for(let i=0;i<path.length;i++){
        x += deltaXMap.get(path[i])!;
        y += deltaYMap.get(path[i])!;
        const key = `${x},${y}`;
        if(set.has(key)){
            return true;
        }
        set.add(key)
    }
    return false
};
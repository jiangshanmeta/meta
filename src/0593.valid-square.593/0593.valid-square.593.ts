function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    const points = [
        p1,
        p2,
        p3,
        p4
    ];
    const map = new Map<number,number>();
    for(let i=1;i<4;i++){
        for(let j=0;j<i;j++){
            const dis = getDis(points[i],points[j]);
            if(map.has(dis)){
                map.set(dis,map.get(dis)!+1);
            }else{
                map.set(dis,1);
            }
        }
    }
    if(map.size !== 2){
        return false;
    }
    const data = [...map.entries()].sort((a,b)=>a[0]-b[0]);
    if(data[0][0]*2 !== data[1][0] || data[0][1] !== 4){
        return false;
    }
    return true
};

function getDis(p1:number[],p2:number[]){
    return Math.pow(p2[0]-p1[0],2)+Math.pow(p2[1]-p1[1],2)
}
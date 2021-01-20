function escapeGhosts(ghosts: number[][], target: number[]): boolean {
    let targetDis = Math.abs(target[0])+Math.abs(target[1]);
    for(let i=0;i<ghosts.length;i++){
        const dis = Math.abs(target[0]-ghosts[i][0])+Math.abs(target[1]-ghosts[i][1]);
        if(dis<=targetDis){
            return false;
        }
    }
    return true;
};
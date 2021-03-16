function exist(board: string[][], word: string): boolean {

    function dfs(x:number,y:number,index:number):boolean{
        if(index === word.length){
            return true;
        }
        if(x<0 || y<0 || x === board.length || y === board[0].length){
            return false;
        }
        if(used[x][y] || board[x][y] !== word[index]){
            return false;
        }
        used[x][y] = true;
        const dxs = [-1,1];
        const dys = [-1,1];
        index++;
        for(let i=0;i<dxs.length;i++){
            if(dfs(x+dxs[i],y,index)){
                return true;
            }
        }
        for(let i=0;i<dys.length;i++){
            if(dfs(x,y+dys[i],index)){
                return true;
            }
        }

        used[x][y] = false;
        return false;
    }


    const M = board.length;
    const N = board[0].length;
    const used:boolean[][] = new Array(M);
    for(let i=0;i<M;i++){
        used[i] = new Array(N).fill(false);
    }

    for(let i=0;i<M;i++){
        for(let j=0;j<N;j++){
            if(dfs(i,j,0)){
                return true;
            }
        }
    }
    return false;
};


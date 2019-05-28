/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

function dfs(graph,stack,matrix){
    while(stack.length){
        const [x,y] = stack.pop();
        if(x>0 && !graph[x-1][y] && matrix[x-1][y]>=matrix[x][y]){
            graph[x-1][y] = true;
            stack.push([x-1,y]);
        }
        
        if(y>0 && !graph[x][y-1] && matrix[x][y-1]>=matrix[x][y]){
            graph[x][y-1] = true;
            stack.push([x,y-1]);
        }
        
        if(x<matrix.length-1 && !graph[x+1][y] && matrix[x+1][y]>=matrix[x][y]){
            graph[x+1][y] = true;
            stack.push([x+1,y]);
        }
        
        if(y<matrix[0].length-1 && !graph[x][y+1] && matrix[x][y+1]>=matrix[x][y]){
            graph[x][y+1] = true;
            stack.push([x,y+1]);
        }
    }
}

var pacificAtlantic = function(matrix) {
    if(matrix.length === 0){
        return [];
    }
    
    // graph1 graph2 分别表示能否到 Pacific 和 Atlantic
    const graph1 = new Array(matrix.length);
    const graph2 = new Array(matrix.length);
    for(let i=0;i<matrix.length;i++){
        graph1[i] = new Array(matrix[0].length).fill(false);
        graph2[i] = new Array(matrix[0].length).fill(false);
    }
    
    // 处理边上的几个 初始化stack
    const stack1 = [];
    const stack2 = [];
    for(let i=0;i<matrix[0].length;i++){
        graph1[0][i] = true;
        stack1.push([0,i]);
        graph2[matrix.length-1][i] = true;
        stack2.push([matrix.length-1,i]);
    }
    
    stack1.shift();
    stack2.pop();
    
    for(let i=0;i<matrix.length;i++){
        graph1[i][0] = true;
        stack1.push([i,0]);
        graph2[i][matrix[0].length-1] = true;
        stack2.push([i,matrix[0].length-1]);
    }

    dfs(graph1,stack1,matrix);
    dfs(graph2,stack2,matrix);
    
    const result = [];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            graph1[i][j] && graph2[i][j] && result.push([i,j]);
        }
    }
    return result;
};
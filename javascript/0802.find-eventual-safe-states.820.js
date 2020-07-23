/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const state = new Array(graph.length).fill(0);
    const stack = [];
    function dfs(index,stack,state,graph){
        let flag = true;
        if(stack.includes(index) || state[index] === 2){
            flag = false;
        }else if(state[index] === 0){
            stack.push(index);
            for(let i=0;i<graph[index].length;i++){
                let relateIndex = graph[index][i];
                let itemResult = dfs(relateIndex,stack,state,graph);
                if(!itemResult){
                    flag = false;
                    break;
                }
            }
            stack.pop();
        }
        state[index] = flag?1:2;
        return flag;
    }
    for(let i=0;i<graph.length;i++){
        if(state[i] !== 0){
            continue;
        }
        dfs(i,stack,state,graph);
    }
    const result = [];
    for(let i=0;i<state.length;i++){
        state[i] === 1 && result.push(i);
    }
    return result;
};
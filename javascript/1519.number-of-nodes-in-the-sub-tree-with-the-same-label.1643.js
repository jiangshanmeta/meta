/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    const graph = {};
    for(let i=0;i<edges.length;i++){
        const [a,b] = edges[i];
        if(!graph[a]){
            graph[a] = [b];
        }else{
            graph[a].push(b)
        }
        if(!graph[b]){
            graph[b] = [a];
        }else{
            graph[b].push(a);
        }
    }
    const pushed = new Array(n).fill(false);
    pushed[0] = true;
    const visited = new Array(n).fill(false);
    const stack = [0];
    const parentChars = [
        new Array(26).fill(0)
    ];

    const chars = [
        new Array(26).fill(0)
    ];
    const result = new Array(n).fill(0);
    while(stack.length){
        const node = stack[stack.length-1];
        if(visited[node]){
            stack.pop();
            const parentChar = parentChars.pop();
            const charItem = chars.pop();
            const code = labels.charCodeAt(node)-97;
            charItem[code]++;
            result[node] = charItem[code];
            for(let i=0;i<26;i++){
                parentChar[i] += charItem[i];
            }
        }else{
            visited[node] = true;
            const relateNodes = graph[node];
            const pC = chars[chars.length-1];
            for(let i=0;i<relateNodes.length;i++){
                const rNode = relateNodes[i];
                if(pushed[rNode]){
                    continue;
                }
                pushed[rNode] = true;
                stack.push(rNode);
                parentChars.push(pC);
                chars.push(new Array(26).fill(0));
            }
        }
        
    }
    return result;
};
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if(!graph){
        return graph
    }
    function dfs(node){
        if(node.copy === undefined){
            node.copy = new UndirectedGraphNode(node.label);
            for(let i=0;i<node.neighbors.length;i++){
                node.copy.neighbors[i] = dfs(node.neighbors[i])
            }
        }
        return node.copy;
    }
    dfs(graph);
    return graph.copy;
};
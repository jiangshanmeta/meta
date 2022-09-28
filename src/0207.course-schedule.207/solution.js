/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 判断有向图是否有环 DFS
function dfs (index, graph, visited, onStack) {
    onStack[index] = true;
    for (let i = 0; i < graph[index].length; i++) {
        if (onStack[graph[index][i]]) {
            return false;
        }
        if (visited[graph[index][i]]) {
            continue;
        }
        visited[graph[index][i]] = true;

        const rst = dfs(graph[index][i], graph, visited, onStack);
        if (!rst) {
            return false;
        }
    }
    onStack[index] = false;
    return true;
}

var canFinish = function (numCourses, prerequisites) {
    const graph = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    const visited = new Array(numCourses).fill(false);
    const onStack = new Array(numCourses).fill(false);
    for (let i = 0; i < numCourses; i++) {
        if (visited[i]) {
            continue;
        }
        visited[i] = true;

        const rst = dfs(i, graph, visited, onStack);
        if (!rst) {
            return false;
        }
    }
    return true;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [to, from, ] of prerequisites) {
        graph[from].push(to);
    }
    const visited = new Array(numCourses).fill(false);
    const onStack = new Array(numCourses).fill(false);
    const post = [];
    let hasCircle = false;
    const dfs = (v) => {
        visited[v] = true;
        onStack[v] = true;

        for (const nextV of graph[v]) {
            if (hasCircle) {
                break;
            }
            if (!visited[nextV]) {
                dfs(nextV);
            } else if (onStack[nextV]) {
                hasCircle = true;
            }
        }

        onStack[v] = false;
        post.push(v);
    };

    for (let i = 0; i < numCourses; i++) {
        if (!hasCircle && !visited[i]) {
            dfs(i);
        }
    }
    if (hasCircle) {
        return [];
    }

    return post.reverse();
};

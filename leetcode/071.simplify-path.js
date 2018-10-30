/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    let index = 1;
    while(index<path.length){
        if(path[index] === '.'){
            let count = 1;
            index++;
            // 找到第一个是/的
            while(index<path.length && path[index] !== '/'){
                index++;
                count++;
            }
            if(count === 2 && path[index-1] === '.'){
                stack.pop();
            }else if(count>2){
                stack.push(path.slice(index-count,index));
            }
        }else if(path[index] !== '/'){
            let startIndex = index;
            index++;
            while(index<path.length && path[index] !== '/'){
                index++;
            }
            stack.push(path.slice(startIndex,index))
        }
        while(index<path.length && path[index] === '/'){
            index++;
        }
        
    }

    return `/${stack.join("/")}`;
};
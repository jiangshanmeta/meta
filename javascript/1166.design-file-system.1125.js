
var FileSystem = function() {
    // 有点前缀树的味道
    this.root = {
        subNode:{},
    };
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.create = function(path, value) {
    path = path.split('/');
    path.shift();
    let lastNode = this.root;
    for(let i=0;i<path.length-1;i++){
        lastNode = lastNode.subNode[path[i]];
        if(!lastNode){
            return false;
        }
    }
    if(lastNode.subNode[path[path.length-1]]){
        return false;
    }
    lastNode.subNode[path[path.length-1]] = {
        subNode:{},
        value,
    }
    return true;
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    path = path.split('/');
    path.shift();
    let lastNode = this.root;
    for(let i=0;i<path.length;i++){
        lastNode = lastNode.subNode[path[i]];
        if(!lastNode){
            return -1;
        }
    }
    return lastNode.value;
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.create(path,value)
 * var param_2 = obj.get(path)
 */
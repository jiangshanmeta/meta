/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.trie = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let before = this.trie;
    for(let i=0;i<key.length;i++){
        if(before[key[i]] === undefined){
            before[key[i]] = {};
        }
        before = before[key[i]];
    }
    before.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */

function travel(node){
    let sum = 0;
    Object.keys(node).forEach((key)=>{
        if(key === 'val'){
            sum += node.val;
        }else{
            sum += travel(node[key]);
        }
    });
    return sum;
}

MapSum.prototype.sum = function(prefix) {
    let before = this.trie;
    for(let i=0;i<prefix.length;i++){
        if(before[prefix[i]] === undefined){
            return 0;
        }
        before = before[prefix[i]];
    }
    return travel(before);
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
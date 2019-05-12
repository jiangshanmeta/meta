/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // cache 是缓存的key value对
    this.cache = {};
    // index是自增的排序 
    // key对应的index越大 则越最近被使用
    this.index = 0;
    // 便于查找 key=>index index=>key的map
    this.keyIndex = {};
    this.indexKey = {};
    this.rest = capacity;
    // 需要删除元素时 找的起始序号
    this.start = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache[key] === undefined){
        return -1;
    }
    // 更新该key对应的index
    delete this.indexKey[this.keyIndex[key]];
    const newIndex = this.index++;
    this.keyIndex[key] = newIndex;
    this.indexKey[newIndex] = key;
    
    return this.cache[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache[key] !== undefined){
        // 有这个key 干掉以前的 index=>key
        delete this.indexKey[this.keyIndex[key]];
    }else if(this.rest === 0){
        // 找到最早出现的key
        while(this.indexKey[this.start] === undefined){
            this.start++;
        }
        const deleteKey = this.indexKey[this.start];
        delete this.cache[deleteKey];
        delete this.indexKey[this.keyIndex[deleteKey]];
        delete this.keyIndex[deleteKey]
    }else{
        this.rest--;
    }
    this.cache[key] = value;
    const newIndex = this.index++;
    this.indexKey[newIndex] = key;
    this.keyIndex[key] = newIndex;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
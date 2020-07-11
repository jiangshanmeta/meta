/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snap_id = 0;
    // buffer缓存的是在两次snap之间set的值
    this.buffer = {};
    // index_snapid_map 的key是index value是snap_id 构成的数组 snap_id 递增
    this.index_snapid_map = {};
    // index_value_map 的key是index value是上面snap_id对应的snap的值
    this.index_value_map = {};
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.buffer[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    Object.keys(this.buffer).forEach((index)=>{
        (this.index_snapid_map[index] || (this.index_snapid_map[index] = []) ).push(this.snap_id);
        (this.index_value_map[index] || (this.index_value_map[index] = []) ).push(this.buffer[index]);
    });
    this.buffer = {};
    return this.snap_id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const index_snapid_list = this.index_snapid_map[index];
    // 没有记录过变化
    if(!index_snapid_list){
        return 0;
    }
    // 二分
    let low = 0;
    let high = index_snapid_list.length-1;
    let current = index_snapid_list.length;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(index_snapid_list[mid]>snap_id){
            current = Math.min(current,mid);
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return current === 0?0:this.index_value_map[index][current-1];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
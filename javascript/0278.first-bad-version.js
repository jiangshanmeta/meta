/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1;
        let min = n;
        // 就是个二分
        while(low<=n){
            let mid = (low+n)/2 | 0;
            if(isBadVersion(mid)){
                min = mid;
                n = mid-1;
            }else{
                low = mid+1;
            }
        }
        return min;
    };
};
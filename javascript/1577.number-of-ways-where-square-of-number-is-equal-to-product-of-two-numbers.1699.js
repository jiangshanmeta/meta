/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
    const map1 = Object.create(null);
    const map2 = Object.create(null);
    for(let i=0;i<nums1.length;i++){
        const multi = nums1[i]*nums1[i];
        map1[multi] = (map1[multi] || 0)+1;
    }
    for(let i=0;i<nums2.length;i++){
        const multi = nums2[i]*nums2[i];
        map2[multi] = (map2[multi] || 0)+1;
    }
    let result = 0;
    for(let i=0;i<nums2.length;i++){
        for(let j=i+1;j<nums2.length;j++){

            const multi = nums2[i]*nums2[j];
            if(map1[multi]){

                result += map1[multi];
            }
        }
    }
    for(let i=0;i<nums1.length;i++){
        for(let j=i+1;j<nums1.length;j++){

            result += (map2[nums1[i]*nums1[j]] || 0);
        }
    }
    return result;
};
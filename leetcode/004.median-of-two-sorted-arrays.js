/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var total = len1 + len2;
    var rest = Math.floor(total/2)-1;
    var rest1 = len1;
    var rest2 = len2;
    var last1;
    var last2;

    while(rest){
        if(!rest1){
            rest2 -= rest;
            rest = 0;
        }else if(!rest2){
            rest1 -= rest;
            rest = 0;
        }else{
            if(rest === 1){
                var last1 = nums1[len1-(rest1-1)-1];
                var last2 = nums2[len2-(rest2-1)-1];
                if(last2>last1){
                    rest1--;
                }else{
                    rest2--;
                }
                rest--;
            }else{
                var half = Math.floor(rest/2);
                var select1 = half;
                var select2 = rest-select1;
                if(rest1<rest2 && select1>rest1){
                    select1 = rest1; 
                    select2 = rest-select1;
                }else if(rest2<rest1 && select2>rest2){
                    select2 = rest2;
                    select1 = rest-select2;
                }
                last1 = nums1[len1-(rest1-select1)-1];
                last2 = nums2[len2-(rest2-select2)-1];
                if(last1>last2){
                    rest -= select2;
                    rest2 -= select2;
                }else{
                    rest -= select1;
                    rest1 -= select1;
                }
            }
            
        }
    }


    var middle;
    if(!rest1){
        middle = nums2[len2-(rest2-1)-1];
        rest2--;
    }else if(!rest2){
        middle = nums1[len1-(rest1-1)-1];
        rest1--;
    }else{
        var last1 = nums1[len1-(rest1-1)-1];
        var last2 = nums2[len2-(rest2-1)-1];
        if(last1>last2){
            middle = last2;
            rest2--;
        }else{
            middle = last1;
            rest1--;
        }
    }

    var midNext;
    if(!rest1){
        midNext = nums2[len2-(rest2-1)-1];
    }else if(!rest2){
        midNext = nums1[len1-(rest1-1)-1];
    }else{
        var last1 = nums1[len1-(rest1-1)-1];
        var last2 = nums2[len2-(rest2-1)-1];
        midNext = Math.min(last1,last2);
    }



    var isOdd = total%2;
    if(isOdd){
        return midNext;
    }else{
        return (middle+midNext)/2
    }
    
    
    
    
};
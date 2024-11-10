class Solution {
    public int findLucky(int[] arr) {
        int[] counts = new int[arr.length+1];
        for(int n : arr){
            if(n>arr.length){
                continue;
            }
            counts[n]++;
        }
        for(int i=counts.length-1;i>0;i--){
            if(counts[i] == i){
                return i;
            }
        }
        return -1;
    }
}
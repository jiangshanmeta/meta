class Solution {
    public int[] getSneakyNumbers(int[] nums) {
        boolean[] flags = new boolean[nums.length-2];
        int[] result = new int[2];
        int index = 0;
        for(int n:nums){
            if(!flags[n]){
                flags[n] = true;
                continue;
            }
            result[index++] = n;
        }
        return result;
    }
}
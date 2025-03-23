class Solution {
    public int repeatedNTimes(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int result = 0;
        for(int n : nums){
            if(set.contains(n)){
                result = n;
                break;
            }
            set.add(n);
        }
        return result;
    }
}
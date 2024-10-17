class Solution {
    public int findRepeatDocument(int[] documents) {
        Set<Integer> set = new HashSet<>();
        for(int n : documents){
            if(set.contains(n)){
                return n;
            }
            set.add(n);
        }
        return 0;
    }
}
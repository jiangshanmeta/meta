class Solution {
    private Set<Integer> set = new HashSet<>();
    private int[] digits;
    private boolean used[];
    public int totalNumbers(int[] digits) {
        this.digits = digits;
        this.used = new boolean[digits.length];
        backTracking(1,0);
        return set.size();
    }
    
    private void backTracking(int offset,int acc){
        if(offset == 4){
            set.add(acc);
            return;
        }
        for(int i=0;i< digits.length;i++){
            if(used[i]){
                continue;
            }
            if(offset == 1 && digits[i] == 0){
                continue;
            }
            if(offset == 3 && digits[i]%2 == 1){
                continue;
            }
            used[i] = true;
            backTracking(offset+1,acc*10+digits[i]);
            used[i] = false;
        }
        
        
    }
    
    
    
}
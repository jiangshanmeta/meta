class Solution {
    public int fillCups(int[] amount) {
        Arrays.sort(amount);
        if(amount[0]+amount[1]<=amount[2]){
            return amount[2];
        }
        
        int diff = amount[0]+amount[1]-amount[2];
        if(diff%2 == 1){
            diff++;
        }
        return amount[2]+diff/2;
    }
}
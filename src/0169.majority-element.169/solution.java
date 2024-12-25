class Solution {
    public int majorityElement(int[] stock) {
        int element = stock[0];
        int count = 1;
        for(int i=1;i<stock.length;i++){
            if(stock[i] == element){
                count++;
            }else if(count>0){
                count--;
            }else{
                count = 1;
                element = stock[i];
            }
        }
        return element;
    }
}
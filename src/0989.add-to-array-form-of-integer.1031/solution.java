class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        List<Integer> result = new ArrayList<>();
        int rest = 0;
        int sum = 0;
        int index = num.length-1;
        while(index>-1 && k>0){
            sum = rest+num[index--]+(k%10);
            result.add(sum%10);
            rest = sum/10;
            k /= 10;
        }
        
        while(index>-1){
            sum = rest + num[index--];
            result.add(sum%10);
            rest = sum/10;
        }
        
        while (k>0){
            sum = rest+(k%10);
            result.add(sum%10);
            rest = sum/10;
            k /= 10;
        }
        
        if(rest != 0){
            result.add(rest);
        }

        return result.reversed();
    }
}
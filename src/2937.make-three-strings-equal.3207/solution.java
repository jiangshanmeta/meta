class Solution {
    public int findMinimumOperations(String s1, String s2, String s3) {
        char[] chars1 = s1.toCharArray();
        char[] chars2 = s2.toCharArray();
        char[] chars3 = s3.toCharArray();
        if(chars1[0] != chars2[0] || chars2[0] != chars3[0]){
            return -1;
        }
        int L = Math.min(Math.min(chars1.length,chars2.length),chars3.length);
        int index = 1;
        while(index<L){
            if(chars1[index] != chars2[index] || chars2[index] != chars3[index]){
                break; 
            }
            index++;
        }
        
        return chars1.length+chars2.length+chars3.length-index*3;
    }
}
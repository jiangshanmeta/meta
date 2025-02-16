class Solution {
    public int[] minOperations(String boxes) {
        char[] chars = boxes.toCharArray();
        int[] result = new int[chars.length];
        int count = 0;
        int dis = 0;
        for(int i=0;i< chars.length;i++){
            result[i] = dis;
            if(chars[i] == '1'){
                count++;
            }
            dis += count;
        }
        count = 0;
        dis = 0;
        for(int i=chars.length-1;i>-1;i--){
            result[i] += dis;
            if(chars[i] == '1'){
                count++;
            }
            dis += count;
        }
        
        return result;
    }
}
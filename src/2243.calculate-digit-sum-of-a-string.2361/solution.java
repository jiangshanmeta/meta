class Solution {
    public String digitSum(String s, int k) {
        StringBuilder stringBuilder = new StringBuilder();
        while (s.length()>k){
            int index = 0;
            while(index<s.length()){
                int sum = 0;
                for(int i=index;i<Math.min(index+k,s.length());i++){
                    sum += s.charAt(i)-'0';
                }
                index += k;
                stringBuilder.append(sum);
            }
            s = stringBuilder.toString();
            stringBuilder.delete(0,stringBuilder.length());
        }
        return s;
    }
}
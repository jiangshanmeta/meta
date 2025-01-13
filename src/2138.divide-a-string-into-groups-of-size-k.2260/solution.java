class Solution {
    public String[] divideString(String s, int k, char fill) {
        String[] result = new String[(int) Math.ceil( s.length()/(double)k )];
        int index = 0;
        int i = 0;
        
        while (index<s.length()){
            if(index+k>s.length()){
                result[i] = s.substring(index)+ String.valueOf(fill).repeat(k-(s.length()-index) );
            }else{
                result[i] = s.substring(index,index+k);        
            }
            index += k;
            i++;
        }
        return result;
    }
}
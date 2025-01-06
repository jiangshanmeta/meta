class Solution {
    public String thousandSeparator(int n) {
        if( n == 0){
            return "0";
        }
        String ns = String.valueOf(n);
        int L = ns.length()/3;
        int rest = ns.length()%3;
        if(rest != 0){
            L++;
        }
        String[] result = new String[L];
        int index = 0;
        int offset = 0;
        if(rest != 0){
            result[0] = ns.substring(0,rest);
            index = rest;
            offset = 1;
        }
        while (offset<result.length){
            result[offset++] = ns.substring(index,index+3);
            index += 3;
        }
        
        return String.join(".",result);
    }
}
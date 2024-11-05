class Solution {
    public String reverseMessage(String message) {
       String[] ss = Arrays.stream(message.split(" ")).filter(s-> !s.isEmpty()).toList().toArray(new String[0]);
        
       int l = 0;
       int r = ss.length-1;
       while(l<r){
           String tmp = ss[l];
           ss[l] = ss[r];
           ss[r] = tmp;
           l++;
           r--;
       }
       
       return String.join(" ",ss);
       

    }
}
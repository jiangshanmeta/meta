class Solution {
    public String capitalizeTitle(String title) {
        return Arrays.stream(title.split(" ")).map((s)->{
            if(s.length()>2){
                String ss = s.toLowerCase();
                return ss.substring(0,1).toUpperCase()+ss.substring(1);
            }else{
                return s.toLowerCase();
            }
        }).collect(Collectors.joining(" "));
    }
}
class Solution {
    public int similarPairs(String[] words) {
        Map<Integer,Integer> map = new HashMap<>();
        int result = 0;
        for(String s : words){
            int k = calc(s);
            if(map.containsKey(k)){
                int c = map.get(k);
                result += c;
                map.put(k,c+1);
            }else{
                map.put(k,1);
            }
            
        }
        
        return result;
    }

    private int calc(String s){
        int result = 0;
        for(char c : s.toCharArray()){
            result |= (1<<(c-'a'));
        }
        return result;
    }
}
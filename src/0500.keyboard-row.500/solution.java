class Solution {
    Map<Character,Integer> map = new HashMap<>();
    public String[] findWords(String[] words) {
        buildMap("qwertyuiop".toCharArray(),1);
        buildMap("asdfghjkl".toCharArray(),2);
        buildMap("zxcvbnm".toCharArray(),3);


        return Arrays.stream(words).filter(this::filter).toList().toArray(new String[0]);
    }

    private boolean filter(String word){
        char[] chars = word.toLowerCase().toCharArray();
        int index = map.get(chars[0]);
        for(int i=1;i< chars.length;i++){
            if(map.get(chars[i]) != index){
                return false;
            }
        }
        return true;
    }

    private void buildMap(char[] chars,int index){
        for(char c:chars){
            map.put(c,index);
        }
    }
}
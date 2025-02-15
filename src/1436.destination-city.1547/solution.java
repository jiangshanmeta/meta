class Solution {
    public String destCity(List<List<String>> paths) {
        Set<String> set = new HashSet<>();
        Map<String,String> map = new HashMap<>();
        for(List<String> list : paths){
            set.add(list.get(0));
            set.add(list.get(1));
            map.put(list.get(0), list.get(1) );
        }
        
        String result = "";
        for(String s : set){
            if(!map.containsKey(s)){
                result = s;
                break;
            }
        }
        return result;
    }
}
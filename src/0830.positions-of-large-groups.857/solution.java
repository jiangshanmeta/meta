class Solution {
    public List<List<Integer>> largeGroupPositions(String s) {
        char[] chars = s.toCharArray();
        int index = 0;
        List<List<Integer>> result = new ArrayList<>();
        while (index< chars.length){
            int start = index;
            char c = chars[index++];
            while (index< chars.length && chars[index] == c){
                index++;
            }
            if(index-start>2){
                result.add(List.of(start,index-1));
            }

        }
        return result;
    }
}
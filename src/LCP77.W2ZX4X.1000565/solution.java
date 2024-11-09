class Solution {
    public int runeReserve(int[] runes) {
        Arrays.sort(runes);
        int result = 0;
        int index = 0;
        while (index<runes.length){
            int start = index;
            int last = runes[index++];
            while (index<runes.length && runes[index]-last<2){
                last = runes[index++];
            }
            result = Math.max(result,index-start);
        }
        return result;
    }
}
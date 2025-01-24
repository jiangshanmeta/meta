class Solution {
    public int findMinDifference(List<String> timePoints) {
        int[] times = new int[timePoints.size()];
        for(int i=0;i<timePoints.size();i++){
            String time = timePoints.get(i);
            char[] chars = time.toCharArray();
            int h = (chars[0]-'0')*10 + (chars[1]-'0');
            int m = (chars[3]-'0')*10 + (chars[4]-'0');
            int t = h*60+m;
            times[i] = t;
        }
        Arrays.sort(times);
        int result = times[0]+24*60-times[times.length-1];
        for(int i=1;i<times.length;i++){
            result = Math.min(result,times[i]-times[i-1]);
        }
        return result;
    }
}
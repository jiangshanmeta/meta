
class Solution {
    public List<String> cellsInRange(String s) {
        List<String> result = new ArrayList<>();
        char[] chars = s.toCharArray();
        char r1 = chars[0];
        int c1 = chars[1]-'0';
        char r2 = chars[3];
        int c2 = chars[4]-'0';
        for(int r = r1;r<=r2;r++){
            for(int c=c1;c<=c2;c++){
                result.add(String.valueOf(new char[]{
                        (char)r,
                        (char)(c+'0')
                }));
            }
        }

        return result;
    }
}
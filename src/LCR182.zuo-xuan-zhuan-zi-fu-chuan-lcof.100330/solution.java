class Solution {
    public String dynamicPassword(String password, int target) {
        return password.substring(target)+password.substring(0,target);
    }
}
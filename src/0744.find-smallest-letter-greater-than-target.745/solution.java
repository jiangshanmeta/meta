class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        int low = 0;
        int high = letters.length - 1;
        int index = letters.length;
        while (low <= high) {

            int mid = (low + high) >> 1;

            if (letters[mid] > target) {
                index = Math.min(index, mid);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return index == letters.length ? letters[0] : letters[index];
    }
}
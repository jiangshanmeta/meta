class Solution {
    public String reformatNumber(String number) {
        char[] chars = number.toCharArray();
        int i = 0;
        int j = 0;
        while (j < chars.length) {
            if (Character.isDigit(chars[j])) {
                chars[i++] = chars[j];
            }
            j++;
        }
        int rest = i;
        List<String> list = new ArrayList<>();
        j = 0;
        while (rest > 4) {
            list.add(String.valueOf(new char[] { chars[j], chars[j + 1], chars[j + 2] }));
            j += 3;
            rest -= 3;
        }
        if (rest == 4) {
            list.add(String.valueOf(new char[] { chars[j], chars[j + 1] }));
            list.add(String.valueOf(new char[] { chars[j + 2], chars[j + 3] }));
        } else if (rest == 3) {
            list.add(String.valueOf(new char[] { chars[j], chars[j + 1], chars[j + 2] }));
        } else if (rest == 2) {
            list.add(String.valueOf(new char[] { chars[j], chars[j + 1] }));
        }

        return String.join("-", list);
    }
}
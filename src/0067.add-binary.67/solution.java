class Solution {
    public String addBinary(String a, String b) {
        StringBuilder stringBuilder = new StringBuilder();
        int indexA = a.length() - 1;
        int indexB = b.length() - 1;
        int addon = 0;
        while (indexA > -1 && indexB > -1) {
            int sum = addon;
            if (a.charAt(indexA) == '1') {
                sum++;
            }
            if (b.charAt(indexB) == '1') {
                sum++;
            }
            if (sum == 1 || sum == 3) {
                stringBuilder.append('1');
            } else {
                stringBuilder.append('0');
            }
            addon = sum >> 1;
            indexA--;
            indexB--;
        }

        while (indexA > -1) {
            int sum = addon;
            if (a.charAt(indexA) == '1') {
                sum++;
            }
            if (sum == 1) {
                stringBuilder.append('1');
            } else {
                stringBuilder.append('0');
            }

            addon = sum >> 1;
            indexA--;
        }

        while (indexB > -1) {
            int sum = addon;
            if (b.charAt(indexB) == '1') {
                sum++;
            }
            if (sum == 1) {
                stringBuilder.append('1');
            } else {
                stringBuilder.append('0');
            }

            addon = sum >> 1;
            indexB--;
        }

        if (addon > 0) {
            stringBuilder.append('1');
        }

        return stringBuilder.reverse().toString();
    }
}
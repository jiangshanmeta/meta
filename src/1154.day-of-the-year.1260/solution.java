import java.time.LocalDate;

class Solution {
    public int dayOfYear(String date) {
        LocalDate localDate = LocalDate.of(
                Integer.parseInt(date.substring(0, 4)),
                Integer.parseInt(date.substring(5, 7)),
                Integer.parseInt(date.substring(8)));

        return localDate.getDayOfYear();
    }
}
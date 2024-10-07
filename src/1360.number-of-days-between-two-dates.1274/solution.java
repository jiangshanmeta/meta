import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

class Solution {
    public int daysBetweenDates(String date1, String date2) {
        return Math.abs((int) ChronoUnit.DAYS.between(
                toLocalDate(date1), toLocalDate(date2)));
    }

    private LocalDate toLocalDate(String date) {
        return LocalDate.parse(date);
    }
}
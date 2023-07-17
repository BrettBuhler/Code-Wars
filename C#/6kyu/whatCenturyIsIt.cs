
/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/
public class Kata {
    public static string WhatCentury (string year) {
        int year_num = int.Parse(year);
        int cen = int.Parse(year.Substring(0,2)) * 100;
        if (cen == year_num) {
            year_num -= 100;
        }
        year_num += 100;
        string cen_string = year_num.ToString().Substring(0,2);
        string sufix_string = GetSuffix(cen_string);
        return cen_string + sufix_string;
    }
    private static string GetSuffix (string century) {
        if (century[1] == '1') {
            if (century[0] == '1') {
                return "th";
            } else {
                return "st";
            }
        } else if (century[1] == '2') {
            if (century[0] == '1') {
                return "th";
            } else {
                return "nd";
            }
        } else if (century[1] == '3') {
            if (century[0] == '1') {
                return "th";
            } else {
                return "rd";
            }
        } else {
            return "th";
        }
    }
}
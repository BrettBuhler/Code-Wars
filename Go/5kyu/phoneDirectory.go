/*
Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => adress"

Examples:
s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"

or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"

Notes
Codewars stdout doesn't print part of a string when between < and >

You can see other examples in the test cases.

JavaScript random tests completed by @matt c.
*/

package kata

import (
	"strings"
	"regexp"
)

func Phone (dir, num string) string {
	lines := strings.Split(dir, "\n")
	name_regex := regexp.MustCompile(`<([^>]+)>`)
	double_space_regex := regexp.MustCompile(`\s+`)
	not_valid_regex := regexp.MustCompile(`[^a-zA-Z0-9.\-]+`)
	var contacts [][]string
	for i := 0; i < len(lines); i++ {
		number_regex := regexp.MustCompile(`\+[0-9-]+`)
		number_match := number_regex.FindAllString(lines[i], -1)
		if len(number_match) > 0 {
			if number_match[0][1:] == num {
				name_match := name_regex.FindStringSubmatch(lines[i])
				address_string := strings.Replace(lines[i], name_match[0], "", -1)
				for j := 0; j < len(number_match); j++ {
					address_string = strings.Replace(address_string, number_match[j], "", -1)
				}
				address_string = strings.Replace(address_string, "_", " ", -1)
				address_string = not_valid_regex.ReplaceAllString(address_string, " ")
				address_string = double_space_regex.ReplaceAllString(address_string, " ")
				address_string = strings.TrimSpace(address_string)
				contacts = append(contacts, []string{name_match[1], address_string})
			}
		}
	}
	if (len(contacts) == 1) {
		name := contacts[0][0]
		address := contacts[0][1]
		return "Phone => " + num + ", Name => " + name + ", Address => " + address
	} else if (len(contacts) > 1) {
		return "Error => Too many people: " + num
	}
	return "Error => Not found: " + num
}
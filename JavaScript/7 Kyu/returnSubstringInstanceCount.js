/*
Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1
*/
const solution = (fullText, searchText) => {
    let count = 0
    while(fullText.includes(searchText)){
        count++
        const startingIndex = fullText.indexOf(searchText)
        fullText = fullText.substring(0,startingIndex) + fullText.substring(startingIndex + searchText.length)
    }
    return count
}
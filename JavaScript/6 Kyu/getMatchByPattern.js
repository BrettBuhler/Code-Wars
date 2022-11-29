/*
letter of the pattern is found in the same order in the word. If a character in the pattern is duplicated, the same logic applies further.

The pattern will always be a string of size 3.

Example of use:

predicate = find_matched_by_pattern('acs')
predicate('access') # True
predicate('sacrifice') # False 
Examples of inputs/outputs:

Pattern:  Word:     Match:
acs       access    true
          ascces    false
          scares    false
vvl       veturvel  true
          velivel   false
bmb       bomb      true
          babyboom  false
*/
// MY SOLUTION

const findMatchedByPattern = (pattern) => {
    return predicate = (str) => {
        let copy = [...str]
        for (let i = 0; i < pattern.length; i++){
            if(!copy.includes(pattern[i])) return false
            let prev = copy.slice(0, copy.indexOf(pattern[i]))
            copy = copy.slice(copy.indexOf(pattern[i]) + 1)
            let rem = i == 0 ? pattern.slice(1) : i == 1 ? pattern.slice(2) : false
            if (rem) {
                for (let i = 0; i < prev.length; i++){
                    if (rem.includes(prev[i])){
                        return false
                    }
                }
           }
        }
        return true
    }
}
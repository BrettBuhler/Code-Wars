/*
Introduction
Ka ka ka cypher is a cypher used by small children in some country. When a girl wants to pass something to the other girls and there are some boys nearby, she can use Ka cypher. So only the other girls are able to understand her.
She speaks using KA, ie.:
ka thi ka s ka bo ka y ka i ka s ka u ka gly what simply means this boy is ugly.

Task
Write a function that accepts a string word and returns encoded message using ka cypher.

Our rules:

The encoded word should start from ka.
The ka goes after vowel (a,e,i,o,u)
When there is multiple vowels together, the ka goes only after the last vowel
When the word is finished by a vowel, do not add the ka after
Input/Output
The word string consists of only lowercase and uppercase characters. There is only 1 word to convert - no white spaces.

Example
"a" => "kaa"
"ka" => "kaka"
"aa" => "kaaa"  
"Abbaa" => "kaAkabbaa"
"maintenance" => "kamaikantekanakance"
"Woodie" => "kaWookadie"
"Incomprehensibilities" => "kaIkancokamprekahekansikabikalikatiekas"
*/
//MY SOLUTION
const kaCokadekaMe = (word) => {
    let arr = word.split('').map((x,i)=>'aeiouAEIOU'.includes(x) && !'aeiouAEIOU'.includes(word[i+1])?`${x}ka`:x)
    if ('aeiouAEIOU'.includes(arr[arr.length-1][0])){
        arr[arr.length-1] = arr[arr.length-1][0]
    }
    return `ka${arr.join('')}`
}

console.log(kaCokadekaMe('Abbaa'))
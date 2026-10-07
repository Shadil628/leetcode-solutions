/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let result=[];
    for(let word of words){
        if(
            result.length===0 || result[result.length-1].split("").sort().join("") !==
            word.split("").sort().join("")
        ) {
            result.push(word);
        }
    }
    return result;
};
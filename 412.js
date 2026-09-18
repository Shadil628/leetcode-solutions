/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result=[];
    [...Array(n)].forEach(function(_,index){
        let num =index+1;
        if(num%15 ===0){
            result.push("FizzBuzz");
        }else if (num%3 ===0){
            result.push("Fizz");
        }
        else if(num%5 ===0){
            result.push("Buzz");
        }
        else {
            result.push(String(num));
        }
    });
    return result;

};
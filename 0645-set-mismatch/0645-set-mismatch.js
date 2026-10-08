/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let seen =new Set();
    let duplicate;
    for(let num of nums){
        if (seen.has(num)) {
            duplicate =num;
        }
        seen.add(num)
    }
    let missing;
    for(let i=1 ; i<=nums.length; i++) {
        if(!seen.has(i)){
            missing=i;
            break;
        }
    }
    return [duplicate, missing];
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index =0;

    for(let num of nums) {
        if(num>=target){
            return index;
        }
        index++;
    }
    return index;
    
};
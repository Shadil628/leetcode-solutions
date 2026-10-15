/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let total=0;
    for(let i=0;i<nums.length;i++){
        let unique =new Set();
        for(let j=i; j<nums.length;j++){
            unique.add(nums[j]);
            total+=unique.size * unique.size;
        }
    }
    return total;
};
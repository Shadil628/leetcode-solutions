/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let n = nums.length;
    let zero = nums.indexOf(0);
    let ans = Infinity;

    function check(step) {
        let prev = zero;
        let count = 1;

        for (let num of nums) {
            if (count >= n) {
                break;
            }

            let curr = (zero + count * step + n) % n;

            if (nums[prev] > nums[curr]) {
                return false;
            }

            prev = curr;
            count++;
        }

        return true;
    }

    if (check(1)) {
        ans = Math.min(ans, zero);
        ans = Math.min(ans, n - zero + 2);
    }

    if (check(-1)) {
        ans = Math.min(ans, zero + 2);
        ans = Math.min(ans, n - zero);
    }

    return ans === Infinity ? -1 : ans;
};

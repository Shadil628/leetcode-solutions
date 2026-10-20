
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    const n = nums.length;

    // 1. Prefix maximum
    const prefMax = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefMax[i + 1] = Math.max(prefMax[i], nums[i]);
    }

    // 2. Suffix minimum
    const suffMin = new Array(n + 1).fill(Infinity);

    for (let i = n - 1; i >= 0; i--) {
        suffMin[i] = Math.min(nums[i], suffMin[i + 1]);
    }

    // 3. Count decreases between adjacent elements
    const prefDrop = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        prefDrop[i] =
            prefDrop[i - 1] + (nums[i - 1] > nums[i] ? 1 : 0);
    }

    // 4. Check whether k is sortable
    function check(k) {
        for (let start = 0; start < n; start += k) {
            const end = start + k - 1;

            let drops = prefDrop[end] - prefDrop[start];

            // Check the circular connection
            if (nums[end] > nums[start]) {
                drops++;
            }

            // The block must be rotatable into sorted order,
            // and it must fit after the preceding blocks.
            if (drops > 1 || prefMax[start] > suffMin[start]) {
                return false;
            }
        }

        return true;
    }

    // 5. Find divisors of n and add valid k values
    let answer = 0;

    for (let i = 1; i <= Math.floor(n / i); i++) {
        if (n % i === 0) {
            const other = n / i;

            if (check(i)) {
                answer += i;
            }

            if (i !== other && check(other)) {
                answer += other;
            }
        }
    }

    return answer;
};

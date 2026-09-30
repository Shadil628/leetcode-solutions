function twoSum(nums,target){
   let map =new Map();
   let result;

    nums.forEach((num,index) =>{
        let needed = target -num;
        if (map.has(needed)){
            result = ([map.get(needed), index])
        }
        map.set(num,  index);
    });
    return result;
};
console.log(twoSum([2,7,11,15],9));
const twoSum = function(nums, target) {
   
for(let [index, num] of nums.entries()){
   let pairNum = target - num;
    // console.log(pairNum);
    
let indexNum = nums.indexOf(pairNum)

   if(indexNum !== -1 && indexNum !== index) {
     return [index, indexNum]
   } 
}
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

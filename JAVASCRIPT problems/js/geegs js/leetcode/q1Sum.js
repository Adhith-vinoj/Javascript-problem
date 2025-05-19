// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.





function twoSum(nums, target) {
    let numMap = {}; // Hashmap to store seen numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // If complement exists in hashmap, return the indices
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }

        // Store the current number and its index in hashmap
        numMap[nums[i]] = i;
    }
    
    return []; // This line won't be reached as per the problem's assumption
}

// Example Usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]


//]//]]



function isPalindrome(arr) {
    return JSON.stringify(arr) === JSON.stringify([...arr].reverse());
}


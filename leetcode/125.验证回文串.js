/**
 * 解法1
 */
const isPalindrome = function(s) {
    const filterString = s.replace(/(\W|_)/g, '').toLowerCase();

    let left = 0, right = filterString.length -1;

    while(left < right) {
        if(filterString[left] !== filterString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

/**
 * 解法2
 */
const isPalindrome = function(s) {
    const filterString = s.replace(/[^a-zA-Z0-9]/g, '');
    const lowerString = filterString.toLowerCase();
    const reverseString = lowerString.split('').reverse().join('');

    return lowerString === reverseString;
};
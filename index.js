/*
License Key Formatting

Given a string S that consists of only alphanumeric characters and dashes. The string is separated into N + 1 groups by N dashes. Also given an integer K. We want to reformat the string S, such that each group contains exactly K characters, except for the first group, which could be shorter than K but still must contain at least one character. Furthermore, a dash must be inserted between two groups, and you should convert all lowercase letters to uppercase.
Examples:

Input: S = “5F3Z-2e-9-w”, K = 4
Output: “5F3Z-2E9W”
Explanation: The string S has been split into two parts, each part has 4 characters.
Note that two extra dashes are not needed and can be removed.

Input: S = “2-5g-3-J”, K = 2
Output: “2-5G-3J”

Explanation: The string s has been split into three parts, each part has 2 characters except the first part, as it could be shorter as mentioned above
*/

const licenceKeyFormat = (str, k) => {
    const output = [];
    let currAmount = 0;
    for(let i=str.length - 1; i >= 0; i--) {
        if(str[i] !== '-') {
            output.push(str[i].toUpperCase());
            ++currAmount;
            if(currAmount === k && i !== 0) {
                output.push('-');
                currAmount = 0;
            } 
        }
    }

    return output.reverse().join("");
}

console.log(licenceKeyFormat("2-5g-3-J", 2));
console.log(licenceKeyFormat("5F3Z-2E9W", 4));
console.log(licenceKeyFormat("33223-2-5F3Z-2E9W", 3));
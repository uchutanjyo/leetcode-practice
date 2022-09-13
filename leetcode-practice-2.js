// after montreal trip.

// THIS one is beocming too irritating - i'll move on for now.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    if (digits.toString() == [9]) {

        return digits = [1, 0]
    } else if (digits.toString() == [9, 9]) {
        console.log('sd')

        return digits = [1, 0, 0]
    } else if (digits.toString() == [9, 9, 9]) {

        return digits = [1, 0, 0, 0]

    }
    for (let i = 0; i < digits.length; i++) {
        if (i === digits.length - 1) {

            digits[i] += 1

            if (digits[i] === 10) {
                if (digits.length === 4 && digits[i] === 10) {
                    if (digits[i] === 10 && digits[i - 2] === 9 && !digits[i - 3] === 9) {
                        (digits[i - 1]) = 1;
                        digits[i] = 0
                        digits[i + 1] = 0
                    } else {
                        (digits[i - 3]) += 1;
                        digits[i - 2] = 0
                        digits[i - 1] = 0
                        digits[i] = 0
                    }
                } else {
                    console.log(digits)

                    digits[i - 1] += 1;
                    digits[i] = 0
                }
                console.log(digits)

            }
        }
    }

    return digits

};


// plusOne([9, 9])


var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    let prefixArray = []
    let longestPrefix = ""
    let longerPrefix
    prefixArray.push(strs[0])
    for (let i = 1; i < strs.length; i++) {
        if (strs[i] == "") {
            longestPrefix = ""
            console.log(longestPrefix)
            return longestPrefix
        }
        prefixArray[i] = []
        for (let j = 0; j < strs[i].length; j++) {

            prefixArray[i] += strs[i][j]
            console.log(prefixArray)
            if (strs[i].charAt(j) !== prefixArray[0][j]) {
                if (prefixArray[i].length === 1) {
                    longestPrefix = ""
                    console.log(longestPrefix)
                    return longestPrefix
                }
                console.log(longestPrefix)
                return longestPrefix
            } else {
                longestPrefix = prefixArray[i]
            }
        }
        console.log(prefixArray[i].length, longestPrefix.length)
        if (prefixArray[i].length < strs[0].length) {
            longerPrefix = prefixArray[i]
        }
    }
    console.log(longerPrefix, longestPrefix)
    if (longerPrefix) {
        console.log(longestPrefix)
        longestPrefix = longerPrefix
    }
    console.log(longestPrefix)

    console.log(prefixArray)


    return longestPrefix
}

longestCommonPrefix(["baab", "bacb", "b", "cbc"])

// var longestCommonPrefix = function (strs) {
//     let prefixArray = []
//     let longestString;
//     prefixArray.push(strs[0])
//     for (let i = 1; i < strs.length; i++) {
//         prefixArray[i] = []
//         for (let j = 0; j < strs.length; j++) {
//             if (strs[i].charAt(j) === prefixArray[0][j]) {
//                 prefixArray[i] += strs[i][j]
//                 longestString = prefixArray[i]
//             }
//         }
//     }
//     console.log(longestString)
//     return longestString
// }
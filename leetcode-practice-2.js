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
    let longerPrefix = ""
    if (!strs[0]) {
        longestPrefix = ""
        console.log(longestPrefix)
        return longestPrefix
    }
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
            if (strs[i][j] !== prefixArray[0][j]) {
                if (strs[i].length === 1) {
                    longestPrefix = ""
                    console.log(longestPrefix)
                    return longestPrefix
                }
                break;
            }
            longerPrefix = prefixArray[i]
        }
        for (let k = 0; k < longerPrefix.length; k++) {
            if (longerPrefix[k] !== prefixArray[i][k]) {
                longestPrefix = ""
                console.log(longestPrefix)
                return longestPrefix
            }
            if (longerPrefix.length > prefixArray[i - 1].length) {
                console.log(longerPrefix[k] === prefixArray[i][k])
                longestPrefix = prefixArray[i - 1]
            } else {
                longestPrefix = longerPrefix
            }
        }
        console.log(longestPrefix)

    }
    console.log(longestPrefix)
    return longestPrefix
}

// longestCommonPrefix(["aac","acab","aa","abba","aa"])

// valid string

var isValid = function (s) {
    // let totalSq = 0
    let totalBr = 0
    // let totalBr = 0
    for (let i = 0; i < s.length; i++) {
        if (s.length === 1) {
            return false
        }
        console.log(s[i])
        if (s[i] === "{" || s[i] === "}" ||
            s[i] === "(" || s[i] === ")" ||
            s[i] === "[" || s[i] === "]") {
            totalBr += 0.5
        }
        // if (s[i] === "[" || s[i] === "]") {
        //     totalSq += 0.5
        // }
        // if (s[i] === "(" || s[i] === ")") {
        //     totalPar += 0.5
        // }

        // if (i > 0 || i % 2 === 0) {
        //     if (s[i] === "}") {
        //         if (s[i - 1] === "{") {
        //             break
        //         } else {
        //             return false
        //         }
        //     }
        //     else if (s[i] === ")") {
        //         if (s[i - 1] === "(") {
        //             break
        //         } else {
        //             return false     
        //         }
        //     }
        //     else if (s[i] === "]") {
        //         if (s[i - 1] === "[") {
        //             break
        //         } else {
        //             return false
        //         }
        //     }

        // }

    }
    console.log(totalBr % 1 === 0)
    if (totalBr % 1 === 0) {
        console.log('asassad', totalBr)
        return true
    } else {
        return false
    }
}




var restoreString = function (s, indices) {
    let restoredString = []
    for (let i = 0; i < s.length; i++) {
        restoredString[indices[i]] = s[i]
    }
    return restoredString.toString().replaceAll(',', '');
};

restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])

restoreString('add', [0, 1, 2])


// decode message problem

var balancedStringSplit = function (s) {
    let answer = 0
    let counter = 0;
    for (let i = 0; i < s.length + 1; i++) {
        if (s[i] == "L") {
            counter++
        } else {

            counter--
        }
        if (counter === 0) {
            answer++
        }
    }
    return answer
};

balancedStringSplit('RLRLRRLL')


// truncate sentence problem

var truncateSentence = function (s, k) {
    let counter = 0;
    let truncatedSentence
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            counter++
        }
        if (counter == k) {
            truncatedSentence = s.slice(0, i)
            return truncatedSentence
        } else if (counter == k - 1 && !s.slice(i).includes(" ")) {
            return s
        }
    }
};

truncateSentence('hi there im matt ok ok ok', 7)

// everse words problem

var reverseWords = function (s) {
    let reversedWords = ""
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " " || !s[i + 1]) {
            for (let j = i; j >= counter; j--) {

                reversedWords += s[j]
            }
                counter = i
                reversedWords += " "

        }
    }
    let finalString=  reversedWords.trim()
    finalString = finalString.replace(/ +(?= )/g,'');
    return finalString
};

reverseWords("Yo Man Whats Going On")

// If Panagagram problem
var checkIfPangram = function(sentence) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'  
  let counter = 26;
  for (let i=0; i<sentence.length; i++) {
    if (sentence.includes(letters[i])) {
        counter--
    }
  }  
  if (counter === 0) {
    return true
} else {

    return false
}
};

checkIfPangram("thequickbrownfojumpsoverthelazydog")
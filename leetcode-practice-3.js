var repeatedSubstringPattern = function(s) {
    let substrings = []
    for (let i=0;i<s.length;i++) {
        if (s.length % 2 !== 0) {
            console.log('nope')
            return false
        }
        substrings.push(s[i])
        if (s[i - 1] && s[i-1] !== s[i]) {
             substrings[i] += s[i+1]
            // s.includes(substrings[i]) ? true : false
        }
        if (substrings[i] += substrings[i] === s) {
            console.log(substrings)
            return true
        } else if (substrings[i] += substrings[i] === s) {

        }

        else {
            console.log('noo')
            return false
        }
    }

    
};

repeatedSubstringPattern('abccabcc')

        // if (s.includes(s[i])) {

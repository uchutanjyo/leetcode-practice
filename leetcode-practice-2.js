// after montreal trip.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function (digits) {
    for (let i = 0; i <= digits.length; i++) {
        if (i === digits.length - 1) {
            digits[i] += 1
        }
        if (digits[i] === 10) {
            if (digits.length === 1) {
                return digits = [1, 0]
            } else if (digits === [9,9]) {
                return digits = [1, 0, 0]
            } else if (digits === [9,9,9]) {


                return digits = [1, 0, 0, 0]

            } else if (digits.length === 4 && digits[i] === 10) {
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

                (digits[i - 1]) += 1;
                digits[i] = 0
            }
            console.log(digits)


        }
    }
   
    return digits

};


plusOne([9, 9])
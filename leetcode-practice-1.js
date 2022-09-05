// Roman Integer problem 

// first, create object in order to be able to look up the meaning of each of these.
const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};


const s = "MMMXLV";

function romanToInt(s) {
    let accumulator = 0;
    // iterate through the string.
    for (let i = 0; i < s.length; i++) {

        // essentially, this checks for all the cases in which subtraction takes place - the cases where a non-intuitive combination of RN is used. checks the current index of i AND the next index, and whether they form any of the 'IV', 'IX' combinations. if so, those specific numbers are added to the accumulator, and i is incremented.

        // in every other case where these combinations are NOT found, the 'usual' numerical equivalent of each RN is added to the accumulator (the RN found in the current index of s -look up this key in the romanHash object and get the correct value); increment.

        // in the end, return the full integer found in the accumulator.
        if (s[i] === "I" && s[i + 1] === "V") {
            accumulator += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            accumulator += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            accumulator += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            accumulator += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            accumulator += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            accumulator += 900;
            i++;
        } else {
            accumulator += romanHash[s[i]];
        }
    }
    console.log(accumulator)
    return accumulator;
}


romanToInt(s)



// 

// Defang IP address problem
// got this completely on my own. happy
function defang(ip) {
    let newIp = ip;
    for (let i = 0; i < newIp.length; i++) {
        if (newIp[i] === "." && newIp[i - 1] !== "[") {
            newIp = [newIp.slice(0, i), "[", newIp[i], "]", newIp.slice(i + 1)].join('');
        }
    }
    return newIp
}

defang('11.11.1.1.1.1.1.1')

var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "--X") {
            x--;
        } else if (operations[i] === "X--") {
            x--;
        } else if (operations[i] === "++X") {
            x++;
        } else if (operations[i] === "X++") {
            x++;
        } else {
            return undefined;
        }
    }
    console.log(x)
    return x;
};

finalValueAfterOperations(["--X", "X++", "--X", "X++", "++X"])


// single setnence problem

const array1 = ["go over there", "no do it right now", "go there now please do it", "you dont want to why not yo", " hey man why dont you want to do"]

var mostWordsFound = function (sentences) {
    let spacesArray = [];
    let counter = 0;
    let maximumWords;
    for (let i = 0; i < sentences.length; i++) {
        for (let j = 0; j < sentences[i].length; j++) {
            if (sentences[i][j] === ' ' && sentences[i][j - 1] && sentences[i][j + 1]) {
                counter++
            }
        }
        spacesArray.push(counter + 1)
        counter = 0;
    }
    maximumWords = spacesArray[0]
    for (let i = 0; i < spacesArray.length; i++) {
        if (maximumWords < spacesArray[i]) {
            maximumWords = spacesArray[i];
        }
    }
    console.log(maximumWords)
    return maximumWords;
};


mostWordsFound(array1)


// String command problem

const command = "G()()()()(al)G(al)()"

var interpret = function (command) {
    let newCommand = command
    for (let i = 0; i < command.length; i++) {
        if (newCommand[i] === "(" && newCommand[i + 1] === ")") {
            newCommand = [newCommand.slice(0, i), 'o', newCommand.slice(i + 2)].join('');
        } else if (newCommand[i] === "(" && newCommand[i + 1] === "a") {
            newCommand = [newCommand.slice(0, i), 'al', newCommand.slice(i + 4)].join('');
        }
    }
    console.log(newCommand)
    return newCommand
};

interpret(command)
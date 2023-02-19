var mostCommonWord = function(paragraph, banned) {
    const punctuationless = paragraph
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .replace(/\s{2,}/g, " ").toLowerCase()
    const strArr = punctuationless.split(' ');
    // console.log(strArr)
    let newArr = []
    for (let i=0; i <= strArr.length; i++) {
        // console.log(strArr[5][strArr[5].length])
        newArr.push({word: strArr[i], count: 1})
        for (let j=i+1; j <= strArr.length  +1; j++) {
            // console.log(j)
            //  console.log(strArr[j], newArr[i].word)

            if (strArr[j], strArr[j] === newArr[i].word) {
                newArr[i].count++
                // console.log(strArr[j])
                // delete strArr[j]
                // strArr.splice(j, j)
            }
        }
        
        // if (strArr[i] = '') {
            
        // }
    }
};

mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])

// starting again after months. Be gentle. 

// Pseudo-figurin it out:
//  turn each index of names into an object, make the corresponding height a property of each object
// sort by height in descending

// my first solution worked, with a little googling to refresh my memory.

var sortPeople = function(names, heights) {
    let objects = []
    for (let i=0; i < names.length; i++) {
        const newObj = {}
        newObj.name = names[i]
        newObj.height = heights[i]
        objects.push(newObj)
    }
    const sortedObjs = objects.sort((a, b) => b.height-a.height);
    // console.log(sortedObjs)
    const result =  sortedObjs.map(a => a.name);
    // console.log(result)
    // return sortedObjs

};


sortPeople(['Rod', 'Pog', 'Barg'], [100, 400, 300])


// pseudo-solution: didn't need one. got this so quickly! yeah!


var numJewelsInStones = function(jewels, stones) {
    let numOfJewels = 0;
    for (let i=0; i < stones.length; i++) {
        for (let j=0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                numOfJewels++
            }
    }
}
// console.log(numOfJewels)
return numOfJewels
};

numJewelsInStones('aAo', 'aaAAoopp')
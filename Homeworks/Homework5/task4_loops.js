let myNames = ["Aneta", "Trajan", "Nikola", "Bob"];
let mySurnames = ["Stankovska", "Stevkovski", "Dalchevski", "Bobsky"];


function orderedFullNames (names, surnames) {
    let resultArray = [];
    for (let i = 0; i < names.length; i++) {
        resultArray.push(`${i+1}.  ${names[i]} ${surnames[i]}`);
    }
    console.log(resultArray);
    return resultArray;
}

let test = orderedFullNames(myNames, mySurnames);

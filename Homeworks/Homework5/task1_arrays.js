function tellStory (name, mood, activity) {
    console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day`)
}


function tellStoryArray (arr) {
    console.log(`This is ${arr[0]}. ${arr[0]} is a nice person. Today they are ${arr[1]}. They are ${arr[2]} all day`)
}

let person1 = ["Aneta", "cheerful", "playing tennis"];

let toldStory1 = tellStory (person1[0], person1[1], person1[2]);
let toldStory2 = tellStoryArray(person1);
let toldStory3 = tellStoryArray (["Aneta", "sleepy", "sleeping"]);

let person2 = [];

let inputName = prompt("Please enter your name");
let inputMood = prompt("Please enter youor mood");
let inputActivity = prompt("please enter youur activity");

person2.push(inputName, inputMood, inputActivity);

let toldStory4 = tellStoryArray(person2);
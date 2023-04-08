// part 2
function helloWorld() {
    console.log("Hellow WOrld, I am a function!");
}
//
// Declarations
var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];
//
//functions

function listTopics(){
    for (let i = 0; i < topics.length; i++){
        console.log(topics[i]);
    }   
}
function selectTopic(){
    if (randomTopic === 'HTML'){
        console.log("let's code HTML!");
    } else if (randomTopic === 'CSS'){
        console.log("let's code CSS!");
    } else if(randomTopic === 'Git'){
        console.log("let's code Git!");
    } else if(randomTopic === 'JavaScript'){
        console.log("let's code JavaScript!");
    } else {console.log("Please Try Again!");
    }
}
//
/*
// part 1
var topics = ["HTML", "CSS", "Git", "JavaScript"];
// console.log(topics);
console.log("dude this is awsome!");
for (let i = 0; i < topics.length; i++){
    console.log(topics[i]);
}
// first conditions. Must define input methode of selection -- adds above ^^
/*
var topic = "HTML"
if (topic === 'HTML'){
    console.log("let's code HTML!")
} else if (topic === 'CSS'){
    console.log("let's code CSS!")
} else if(topic === 'Git'){
    console.log("let's code Git!")
} else if(topic === 'JavaScript'){
    console.log("let's code JavaScript!")
} else {console.log("Please Try Again!")}
*/
console.log("here is a list of topics that we are learning in CodeCamp:");
listTopics();
console.log("which topic should we first start with?");
selectTopic();

// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    agent: ["Ethan Hunt", "Agent 47", "007", "Bond", "Agent", "Fulcrum", "Maverick ", "SilentFox", "CrimsonFalcon", "009", "Agent Walker", "Agent Brandt"],
    action: ["infiltrate", "extract", "surveil", "sabotage", "interrogate", "assassinate", "retrieve", "disrupt", "eliminate"],
    location: ["Tokyo", "New York", "Shanghai","Dubai", "an uknown location", "the Amazon", "a secret underground bunker", "a high tech lab", "a party", "a mansion", "a space station"],
    target: ["John", "Mario", "the Illuminati", "Santa", "Howard the Duck", "the Beatles"],
    lose: ["do not fail", "are not killed", "are not seen", "are not discovered", "do not blow this operation"],
    fate: ["Nintendo", "the world", "Chicago", "our lives as we know it", "the NFL", "the government", "this organization", "Sega"],
    time: ["five", "two", "5,000", "78", "53", "three", "ten", "90", "672", "1234567890", "908"],
    
  };
  
  const template = `$agent, you have been assigned to $action $target in $location. It is imperative that you $lose. The very fate of $fate hangs in the balance.
  As always, this message will self destruct in $time seconds. Good Luck!"
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    $("#box").text(story);
  }
  
  /* global clicker */
  $("#clicker").click(generate);
  
  generate();
  
}

// let's get this party started - uncomment me
//main();
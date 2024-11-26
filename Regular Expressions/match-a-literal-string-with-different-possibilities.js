let petString = "James has a pet cat.";
let petRegex = /dog|bird|cat|fish/; 
let result = petRegex.test(petString);
console.log(result); 

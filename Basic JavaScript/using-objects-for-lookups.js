// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const phoneticDictionary = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
result = phoneticDictionary[val]; 

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop === "tracks" && value !== "") {
    // If tracks doesn't exist, create an empty array
    if (!records[id].tracks) {
      records[id].tracks = [];
    }
    // Add the new track to the tracks array
    records[id].tracks.push(value);
  } else if (value === "") {
    // If the value is an empty string, delete the property
    delete records[id][prop];
  } else {
    // Otherwise, set the property to the new value
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

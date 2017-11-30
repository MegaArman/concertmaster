const Concertmaster = {};
const pitchToMidi = 
{ 
  "C": 0, 
  "C#": 1, "Db": 1, 
  "D": 2, 
  "D#" : 3, "Eb": 3, 
  "E": 4, 
  "F": 5, 
  "F#" :6, "Gb": 6, 
  "G": 7, 
  "G#": 8, "Ab": 8, 
  "A":9, 
  "A#": 10, "Bb": 10, 
  "B": 11
};

Concertmaster.noteStringToMidiNum = (noteString) =>
{
  const accidental = (noteString.length === 3);
  const pitchMidi = accidental ? 
    pitchToMidi[noteString[0].toUpperCase() + noteString[1]]
    : 
    pitchToMidi[noteString[0]];                                  
  const octaveMidi = noteString[noteString.length - 1] * 12;
  const midiNum = pitchMidi + octaveMidi;
  return (midiNum >= 0 && midiNum <= 119) ? midiNum: false;
};

Concertmaster.midiNumToNoteString = (midiNum) =>
{
  const pitch = Object.keys(pitchToMidi)
    .find(pitch => pitchToMidi[pitch] === (midiNum % 12));
  const octave = Math.floor(midiNum / 12);
  const noteString = pitch + octave.toString();
  
  return (midiNum >= 0 && midiNum <= 119) ? noteString: false;
};

const keysToNumSharpsFlats = 
{
  "Gb": -6, 
  "Db":-5, 
  "Ab": -4,
  "Eb":-3, 
  "Bb":-2,
  "F": -1,
  "C": 0, 
  "G": 1, 
  "D": 2, 
  "A": 3,
  "E":4, 
  "B": 5, 
  "F#": 6
};

Concertmaster.keyToNumSharpsFlats = (key) => keysToNumSharpsFlats[key];

Concertmaster.numSharpsFlatsToKey = (numSharpsFlats) => 
  Object.keys(keysToNumSharpsFlats)
    .find(key => keysToNumSharpsFlats[key] === numSharpsFlats);

Object.freeze(Concertmaster);

module.exports = Concertmaster;

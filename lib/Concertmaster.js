const Concertmaster = {};
const pitchToMidi = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A":9, "B": 11};
const midiToPitch = {"0": "C", 
                     "1": "C#", 
                     "2": "D", 
                     "3": "D#", 
                     "4": "E", 
                     "5": "F", 
                     "6": "F#", 
                     "7": "G", 
                     "8": "G#", 
                     "9": "A", 
                     "10": "A#", 
                     "11":"B"};


Concertmaster.noteStringToMidiNum = (note) =>
{
  const pitchMidi = pitchToMidi[note[0].toUpperCase()];
  const accidental = ( () =>
  {
    const flat = (note[1] === "b") ? -1: 0;
    const sharp = (note[1] === "#") ? 1: 0;
    return flat || sharp; 
  })();

  const octaveMidi = (accidental) ? parseInt(note[2]) * 12:
    parseInt(note[1]) * 12;
  const midiNum = pitchMidi + accidental + octaveMidi;

  return (midiNum >= 0) ? midiNum: false;
};

Concertmaster.midiNumToNoteString = (midiNum) =>
{
  const pitch = midiToPitch[(midiNum % 12).toString()];
  const octave = Math.floor(midiNum / 12);
  const noteString = pitch + octave.toString();
  
  return (midiNum >= 0 && midiNum <= 119) ? noteString: false;
};

const keysToNumSharpsFlats = 
{
  "Gb": -6, "Db":-5, "Ab": -4,"Eb":-3, "Bb":-2,
  "F": -1,"C": 0, "G": 1, "D": 2, "A": 3,
  "E":4, "B": 5, "F#": 6
};

Concertmaster.keyToNumSharpsFlats = (key) => keysToNumSharpsFlats[key];

Concertmaster.numSharpsFlatsToKey = (numSharpsFlats) => 
  Object.keys(keysToNumSharpsFlats).find(key => keysToNumSharpsFlats[key] === numSharpsFlats);

Object.freeze(Concertmaster);

module.exports = Concertmaster;

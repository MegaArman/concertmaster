const Concertmaster = {};
const pitchToMidi = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A":9, "B": 11};

Concertmaster.noteToMidi = (note) =>
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

Concertmaster.fifthsToKey = (fifth) =>
{
  const fifthsToKeyMap = 
  {
    "-6": "Gb", "-5": "Db", "-4":"Ab", "-3": "Eb", "-2": "Bb", "-1": 
    "F","0": "C","1": "G", "2": "D", "3": "A", "4": "E", "5": "B", "6": "F#"
  };
  
  return fifthsToKeyMap[fifth.toString()];
};

Object.freeze(Concertmaster);

module.exports = Concertmaster;

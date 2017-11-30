# concertmaster
This simple module aims to make conversions in music informatics easier. It is helpful for MusicXML processing.

## Installation
```
npm install concertmaster
```

## Usage

```javascript
const cm = require("concertmaster");
console.log(cm.noteToMidi("G#5")); //=> 68
```

Currently supports the following functions:
### noteStringToMidiNum(noteString)
takes a note string and converts it to a midi #

Ex:
```javascript
cm.noteStringToMidiNum("G#5"); //=> 68
```

### midiNumToNoteString(midiNum)
takes a midi # and converts to a note string

Ex:
```javascript
cm.midiNumToNoteString(68); //=> G#5
```

### keyToNumSharpsFlats(key)
takes a key and converts it to a number between -6 and 6.  Negative numbers represent flats and positive numbers represent sharps as is in accordance with MusicXML

Ex:
```javascript
cm.keyToNumSharpsFlats("Gb"); //=> -6
```

### numSharpsFlatsToKey(numSharpsFlats)
takes a number between -6 and 6 and converts it to a key. Negative numbers represent flats and positive numbers represent sharps as is in accordance with MusicXML

Ex:
```javascript
cm.numSharpsFlatsToKey(-6); //=> Gb
```

### More functionality to come soon...
...

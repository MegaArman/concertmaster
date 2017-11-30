"use strict";
const test = require("tape").test;
const cm = require("../lib/Concertmaster");

test("noteStringToMidiNum", (t) =>
{
  t.deepEqual(cm.noteStringToMidiNum("C0"), 0, "min");
  t.deepEqual(cm.noteStringToMidiNum("B#9"), 120, "max");
  t.deepEqual(cm.noteStringToMidiNum("G#5"), 68, "sharp");
  t.deepEqual(cm.noteStringToMidiNum("Gb5"), 66, "flat");
  t.deepEqual(cm.noteStringToMidiNum("Cb0"), false, "too low");
  t.end();
});

test("midiNumToNoteString", (t) =>
{
  t.deepEqual(cm.midiNumToNoteString(0), "C0", "min");
  t.deepEqual(cm.midiNumToNoteString(119), "B9", "max");
  t.deepEqual(cm.midiNumToNoteString(68), "G#5", "accidental");
  t.deepEqual(cm.midiNumToNoteString(-1), false, "too low");
  t.end();
});

test("fifthsToKey", (t) =>
{
  t.deepEqual(cm.fifthsToKey("-6"), "Gb", "-6");
  t.end();
});

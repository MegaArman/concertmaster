"use strict";
const test = require("tape").test;
const cm = require("../lib/Concertmaster");

test("noteStringToMidiNum", (t) =>
{
  t.deepEqual(cm.noteStringToMidiNum("C0"), 0, "min");
  t.deepEqual(cm.noteStringToMidiNum("B9"), 119, "max");
  t.deepEqual(cm.noteStringToMidiNum("b9"), 119, "max w lowercase note");
  t.deepEqual(cm.noteStringToMidiNum("G#5"), 68, "sharp");
  t.deepEqual(cm.noteStringToMidiNum("g#5"), 68, "sharp w lowercase note");
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

test("keyToNumSharpsFlats", (t) =>
{
  t.deepEqual(cm.keyToNumSharpsFlats("Gb"), -6, "Gb");
  t.end();
});

test("numSharpsFlatsToKey", (t) =>
{
  t.deepEqual(cm.numSharpsFlatsToKey(-6), "Gb", "Gb");
  t.end();
});

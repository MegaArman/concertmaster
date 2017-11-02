"use strict";
const test = require("tape").test;
const cm = require("../lib/Concertmaster");

test("noteToMidi", (t) =>
{
  t.deepEqual(cm.noteToMidi("C0"), 0, "min");
  t.deepEqual(cm.noteToMidi("B#9"), 120, "max");
  t.deepEqual(cm.noteToMidi("G#5"), 68, "sharp");
  t.deepEqual(cm.noteToMidi("Gb5"), 66, "flat");
  t.deepEqual(cm.noteToMidi("Cb0"), false, "too low");
  t.end();
});

test("fifthsToKey", (t) =>
{
  t.deepEqual(cm.fifthsToKey("-6"), "Gb", "-6");
  t.end();
});

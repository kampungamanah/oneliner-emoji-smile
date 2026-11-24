import * as fs from "node:fs";

// Exactly one emoji: the one most likely to make a stranger smile.
// A warm, uncomplicated smile — the safest emoji to send a stranger.
// The file must end exactly at the last character of the line: no newline is appended.
// No words in this entry; the emoji does all the talking.
const entry = "😊";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const text = `Do not turn your head to look at the sunset while driving through the intersection of Oak and 4th this evening.
That three-second distraction caused the accident that paralyzed your legs, transforming your future as a dancer into a life dedicated to wheelchair advocacy.`;

const lines = text.split('\n');
if (text.includes('\r') || lines.length !== 2 || lines.some((line) => line.length === 0) || Array.from(text).length < 1 || Array.from(text).length > 279) {
  throw new Error('Invalid entry text');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text + '\n');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') {
  throw new Error('Output verification failed');
}

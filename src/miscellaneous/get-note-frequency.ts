import { assert } from 'ts-essentials';

type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const letters = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;
type Letter = typeof letters[number];

type Note = `${Letter}${Octave}`;

// Lowest note of the lowest octave
const BASE_FREQUENCY = 16.352;
const SEMI_TONES_PER_OCTAVE = letters.length;

export const getNoteFrequency = (note: Note) => {
  const result = note.match(/([A-Z]#?)(\d)/);
  assert(result);
  const [, letter, octave] = result;
  const semiTonePosition = letters.indexOf(letter as any);
  if (semiTonePosition === -1) {
    throw new Error(`Invalid note letter: ${letter}`);
  }
  const i = semiTonePosition + SEMI_TONES_PER_OCTAVE * parseInt(octave);

  return BASE_FREQUENCY * 2 ** (i / SEMI_TONES_PER_OCTAVE);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('note frequency calculate', () => {
    expect(Math.floor(getNoteFrequency('C0'))).toBe(16);
    expect(Math.floor(getNoteFrequency('D3'))).toBe(146);
    expect(Math.floor(getNoteFrequency('C#5'))).toBe(554);
  });
}

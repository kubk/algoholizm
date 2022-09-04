import { getNoteFrequency } from './get-note-frequency';

test('note frequency calculate', () => {
  expect(Math.floor(getNoteFrequency('C0'))).toBe(16)
  expect(Math.floor(getNoteFrequency('D3'))).toBe(146)
  expect(Math.floor(getNoteFrequency('C#5'))).toBe(554)
})

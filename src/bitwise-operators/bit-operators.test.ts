import { clearBit, countBits, setBit, toggleBit } from './bit-operators';

describe('bit operators', () => {
  it('setBit', () => {
    expect(setBit(0b100, 1)).toBe(0b110);
    expect(setBit(0b100, 2)).toBe(0b100);
  })

  it('clearBit', () => {
    expect(clearBit(0b110, 1)).toBe(0b100);
    expect(clearBit(0b110, 0)).toBe(0b110);
  })

  it('toggleBit', () => {
    expect(toggleBit(0b110, 1)).toBe(0b100);
    expect(toggleBit(0b110, 0)).toBe(0b111);
  })

  it('count bits', () => {
    expect(countBits(0b110)).toBe(2);
    expect(countBits(0b001)).toBe(1);
    expect(countBits(0b000)).toBe(0);
  })
})

import { ipV4Pack, ipV4Unpack } from './ip-v4-pack';

describe('IP v4 pack / unpack', () => {
  it('packs / unpacks IP', () => {
    // 2**8 = 256 values = 1 bite
    // IP has 4 bites = 4 * 8 bits
    // 2**31 gives 1 with 31 zeroes. It is negative number
    expect(ipV4Pack([192, 168, 1, 1])).toBe(-1062731519);
    expect(ipV4Unpack(-1062731519)).toStrictEqual([192, 168, 1, 1]);
  });
});

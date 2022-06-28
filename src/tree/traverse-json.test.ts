import { traverseJson } from './traverse-json';

test('traverse json', () => {
  const json = [{ a: { b: 'string' } }, { c: [{ d: 1, e: 2 }, { g: 3 }] }];

  let actual = ''
  const callback = (key: string, value: string | number | object) => {
    actual += '_' + key;
    if (typeof value === 'object' && value !== null) {
    } else {
      actual += '_' + value;
    }
  }

  traverseJson(json, callback)
  expect(actual).toBe('_a_b_string_c_d_1_e_2_g_3')
});

import * as crypto from 'crypto';
import { expect, test } from 'vitest';
import { aes256ctr } from './aes-256-ctr';

test('AES 256 CTR encrypt/decrypt', () => {
  const secretKey = crypto.randomBytes(32); // A random 256-bit key for AES-256
  const plaintext = 'This is a message that needs to be encrypted!';

  const encryptedData = aes256ctr.encrypt(plaintext, secretKey);
  expect(encryptedData.ciphertext).not.toBeFalsy();
  expect(encryptedData.ciphertext).not.toEqual(plaintext);

  const decryptedData = aes256ctr.decrypt(encryptedData.ciphertext, encryptedData.iv, secretKey);
  expect(decryptedData).toEqual(plaintext);
});

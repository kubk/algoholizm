import * as crypto from 'crypto';

const encrypt = (plaintext: string, key: Buffer) => {
  const iv = crypto.randomBytes(16); // A random 128-bit IV
  const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);

  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    ciphertext: encrypted,
    iv: iv.toString('hex'),
  };
};

const decrypt = (ciphertext: string, iv: string, key: Buffer) => {
  const decipher = crypto.createDecipheriv('aes-256-ctr', key, Buffer.from(iv, 'hex'));

  try {
    let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (err) {
    console.error('Decryption failed:', err);
    return null;
  }
};

export const aes256ctr = {
  decrypt,
  encrypt,
};

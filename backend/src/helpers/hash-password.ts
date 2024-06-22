import crypto from 'crypto';

export const passwordHasher = async (password: string): Promise<string> => {
   return new Promise((resolve, reject) => {
     crypto.scrypt(password, process.env.SALT as string, 64, (err, derivedKey) => {
       if (err) reject(err);
       resolve(derivedKey.toString('hex'));
     });
   });
};

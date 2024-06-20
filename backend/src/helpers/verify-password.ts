import crypto from "crypto"

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
   return new Promise((resolve, reject) => {
     crypto.scrypt(password, process.env.SALT as string, 64, (err, derivedKey) => {
       if (err) reject(err);
       resolve(derivedKey.toString('hex') === hash);
     });
   });
};

import { Keypair } from '@solana/web3.js';
import fs from 'mz/fs.js';

const getServerKeypair = () => {
    if (!process.env.SOLANA_PRIVATE_KEY) {
        throw new Error('Environment variable does not define Solana privkey.');
    }
    const keyBytes = Uint8Array.from(JSON.parse(process.env.SOLANA_PRIVATE_KEY));
    return Keypair.fromSecretKey(keyBytes);
};
const getServerPubkey = () => getServerKeypair().publicKey;
const getServerPrivkey = () => getServerKeypair().secretKey;
/**
 * Create a Keypair from a secret key stored in file as bytes' array
 */
const createKeypairFromFile = async (filePath) => {
    const secretKeyString = await fs.readFile(filePath, { encoding: 'utf8' });
    const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
    return Keypair.fromSecretKey(secretKey);
};

export { createKeypairFromFile, getServerKeypair, getServerPrivkey, getServerPubkey };

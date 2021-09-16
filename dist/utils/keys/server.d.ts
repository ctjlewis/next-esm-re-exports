import { Keypair } from '@solana/web3.js';
export declare const getServerKeypair: () => Keypair;
export declare const getServerPubkey: () => import("@solana/web3.js").PublicKey;
export declare const getServerPrivkey: () => Uint8Array;
/**
 * Create a Keypair from a secret key stored in file as bytes' array
 */
export declare const createKeypairFromFile: (filePath: string) => Promise<Keypair>;

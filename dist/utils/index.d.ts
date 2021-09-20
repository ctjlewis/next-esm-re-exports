import { Connection, Keypair } from '@solana/web3.js';
export declare function newAccountWithLamports(connection: Connection, lamports?: number): Promise<Keypair>;
/**
 * Load and parse the Solana CLI config file to determine which RPC url to use
 */
export declare function getRpcUrl(): Promise<string>;

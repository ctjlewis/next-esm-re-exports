import { Keypair } from '@solana/web3.js';
import { SOLANA_CONFIG } from '../constants/index.js';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
async function newAccountWithLamports(connection, lamports = 1000000) {
    const keypair = Keypair.generate();
    const signature = await connection.requestAirdrop(keypair.publicKey, lamports);
    await connection.confirmTransaction(signature);
    return keypair;
}
/**
 * Load and parse the Solana CLI config file to determine which RPC url to use
 */
async function getRpcUrl() {
    try {
        const config = SOLANA_CONFIG;
        if (!config.jsonRpcUrl)
            throw new Error('Missing RPC URL');
        return config.jsonRpcUrl;
    }
    catch (err) {
        console.warn('Failed to read RPC url from CLI config file, falling back to localhost');
        return 'http://localhost:8899';
    }
}

export { getRpcUrl, newAccountWithLamports };

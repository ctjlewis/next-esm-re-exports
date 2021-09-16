import { KeyLike } from '../../utils/keys';
import { RpcResponseAndContext } from '@solana/web3.js';
/**
 * Check the SOL or SPL token balance of an address.
 *
 * @param accountAddress The account to check.
 * @param tokenMint The token for which to check the balance of
 * `accountAddress`. If not provided, returns SOL balance.
 * @returns The balance of `accountAddress` in SOL or the given token mint.
 */
export declare const useSolanaBalance: (address: KeyLike) => RpcResponseAndContext<number> | undefined;
/**
 * Get the token balance of a given address and token mint.
 */

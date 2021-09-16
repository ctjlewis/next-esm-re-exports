import { useState, useEffect } from 'react/index.js';
import { usePubkey } from '../usePubkey/index.js';
import * as test from '../../index.js';
import { useSolanaState } from '../../index.js';

console.log(test);
/**
 * Check the SOL or SPL token balance of an address.
 *
 * @param accountAddress The account to check.
 * @param tokenMint The token for which to check the balance of
 * `accountAddress`. If not provided, returns SOL balance.
 * @returns The balance of `accountAddress` in SOL or the given token mint.
 */
const useSolanaBalance = (address) => {
    const publicKey = usePubkey(address);
    const { connection } = useSolanaState();
    const [balance, setBalance] = useState();
    useEffect(() => {
        (async () => {
            const newBalance = await connection?.getBalanceAndContext(publicKey);
            if (newBalance) {
                setBalance(newBalance);
            }
        })();
    }, [publicKey, connection]);
    return balance;
};
/**
 * Get the token balance of a given address and token mint.
 */
// export const useTokenBalance = (address: KeyLike, mintAddress: KeyLike) => {
//   const connection = useConnection();
// };

export { useSolanaBalance };

import { useEffect, useState } from 'react';
import { KeyLike } from '../../utils/keys';
import { RpcResponseAndContext } from '@solana/web3.js';
import { usePubkey } from '../usePubkey';

// @todo Investigate re-exports.
import { useSolanaState } from '../..';
import * as rootStarImport from '../..';
console.log('inside hooks/useBalance', rootStarImport);

/**
 * Check the SOL or SPL token balance of an address.
 *
 * @param accountAddress The account to check.
 * @param tokenMint The token for which to check the balance of
 * `accountAddress`. If not provided, returns SOL balance.
 * @returns The balance of `accountAddress` in SOL or the given token mint.
 */
export const useSolanaBalance = (address: KeyLike) => {
  const publicKey = usePubkey(address);
  const { connection } = useSolanaState();
  const [balance, setBalance] = useState<RpcResponseAndContext<number>>();

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

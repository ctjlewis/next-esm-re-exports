import { PublicKey } from '@solana/web3.js';
import { useMemo } from 'react/index.js';

const usePubkey = (account) => {
    return useMemo(() => new PublicKey(account), [account]);
};

export { usePubkey };

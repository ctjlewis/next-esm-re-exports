import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from '../utils/keys/index.js';
import { Token } from '@solana/spl-token/lib/index.cjs.js';

const getAssociatedTokenAddress = async (userAddress, mintAddress) => {
    return await Token.getAssociatedTokenAddress(ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, mintAddress, userAddress);
};

export { getAssociatedTokenAddress };

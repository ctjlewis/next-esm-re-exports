import{ASSOCIATED_TOKEN_PROGRAM_ID as s,TOKEN_PROGRAM_ID as o}from"../utils/keys/index.js";import{Token as e}from"@solana/spl-token/lib/index.cjs.js";const t=async(t,i)=>await e.getAssociatedTokenAddress(s,o,i,t);export{t as getAssociatedTokenAddress};

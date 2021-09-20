import{Keypair as r}from"@solana/web3.js";import e from"mz/fs.js";const o=()=>{if(!process.env.SOLANA_PRIVATE_KEY)throw new Error("Environment variable does not define Solana privkey.");const e=Uint8Array.from(JSON.parse(process.env.SOLANA_PRIVATE_KEY));return r.fromSecretKey(e)},n=()=>o().publicKey,t=()=>o().secretKey,s=async o=>{const n=await e.readFile(o,{encoding:"utf8"}),t=Uint8Array.from(JSON.parse(n));return r.fromSecretKey(t)};export{s as createKeypairFromFile,o as getServerKeypair,t as getServerPrivkey,n as getServerPubkey};
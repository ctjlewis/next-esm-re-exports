import n from"@solana/spl-token/lib/index.cjs.js";import e from"@solana/web3.js";console.log("Connecting to cluster.");const o=e.clusterApiUrl("mainnet-beta"),t=new e.Connection(o,"confirmed");console.log("Connected to",{clusterUrl:o}),console.log("Generating wallet.");const a=e.Keypair.generate();console.log("Generating a new wallet to deposit to.");const c=e.Keypair.generate();console.log("Creating a new token mint.",a.publicKey,n.TOKEN_PROGRAM_ID.toBase58());const s=await n.Token.createMint(t,a,a.publicKey,null,9,n.TOKEN_PROGRAM_ID);console.log("Getting or creating mint account of sender.");const i=await s.getOrCreateAssociatedAccountInfo(a.publicKey);console.log("Getting or creating token account of receiver.");const r=await s.getOrCreateAssociatedAccountInfo(c.publicKey);console.log("Minting 1 token to sender address."),await s.mintTo(i.address,a.publicKey,[],1e9),console.log("Creating transaction.");const l=(new e.Transaction).add(n.Token.createTransferInstruction(n.TOKEN_PROGRAM_ID,i.address,r.address,a.publicKey,[],1));console.log("Signing transaction and broadcasting.");const g=await e.sendAndConfirmTransaction(t,l,[a],{commitment:"confirmed"});console.log("TX SIGNATURE:",g);

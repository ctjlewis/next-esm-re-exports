/// <reference types="react" />
import { Connection, PublicKey } from '@solana/web3.js';
declare const SolanaStateProvider: import("react").FC<{}>, useSolanaState: import("create-stateful-context").UseAsyncContextHook<{
    connection: Connection | null;
    pubkey: PublicKey | null;
}>;
export { SolanaStateProvider, useSolanaState };

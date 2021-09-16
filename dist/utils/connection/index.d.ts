import { Connection } from '@solana/web3.js';
/**
 * Connection to the network.
 */
declare let connection: Connection | undefined;
/**
 * Establish a connection to the cluster
 */
export declare const establishConnection: () => Promise<Connection>;
/**
 * Get the current session; establish a new one if it does not exist.
 */
export declare const getConnection: () => Promise<Connection>;
export { connection };

import { createStatefulContext } from 'create-stateful-context';
import { getConnection } from '../utils/connection/index.js';

const DEFAULT_CONTEXT = {
    connection: null,
    pubkey: null,
};
const [SolanaStateProvider, useSolanaState] = createStatefulContext({
    initialState: DEFAULT_CONTEXT,
    updateState: async ({ connection, updateState }) => {
        if (!connection) {
            updateState({ connection: await getConnection() });
        }
        return false;
    },
});

export { SolanaStateProvider, useSolanaState };

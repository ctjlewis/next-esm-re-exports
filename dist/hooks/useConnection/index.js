import { getConnection } from '../../utils/connection/index.js';
import { useEffect } from 'react/index.js';
import { useSolanaState } from '../../context/index.js';

const useConnection = () => {
    const { connection, loading, updateState } = useSolanaState();
    console.log({ loading });
    useEffect(() => {
        (async () => {
            console.log('Top of callback useConnection');
            updateState({
                connection: await getConnection(),
            });
        })();
    }, [updateState]);
    return connection;
};

export { useConnection };

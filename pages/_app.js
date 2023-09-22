import '@/styles/globals.css';

import UseFavoritos from '@/hook/useFavoritos';
import UseApi from '@/hook/useApi';

export default function App({ Component, pageProps }) {
    return (
        <UseApi>
            <UseFavoritos>
                <Component {...pageProps} />
            </UseFavoritos>
        </UseApi>
    );
}

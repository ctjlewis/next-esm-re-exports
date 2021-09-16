import { jsx } from 'react/jsx-runtime.js';

// import { useSolanaBalance } from '../..';
// const EXAMPLE_WALLET = 'FeuT9mmNGSDxaUVSMPLxbGhybh8i3mjUGKhpnXHuzyCe';
const BigButton = () => {
    // const balance = useSolanaBalance(EXAMPLE_WALLET);
    // const { value } = balance || {};
    return (jsx("div", Object.assign({ className: "\n        m-8 px-16 py-8\n        text-center\n        cursor-pointer \n        rounded-3xl \n        bg-gradient-to-br from-pink-50 to-blue-50 \n        border-4 border-blue-100 \n        shadow-sm hover:shadow-lg\n      " }, { children: jsx("h2", Object.assign({ className: "\n        font-black\n        select-none\n        text-blue-700\n        opacity-80\n      " }, { children: "Big Button" }), void 0) }), void 0));
};

export { BigButton };

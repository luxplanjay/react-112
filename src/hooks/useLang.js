import { use } from 'react';
import { LangContext } from '../context/lang';

export const useLang = () => {
    const ctx = use(LangContext);
    return ctx;
};

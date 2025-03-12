import { createContext, useState } from 'react';

// Контекст це можливість створити глобальний стан

export const LangContext = createContext();

export default function LangProvider({ children }) {
    const [appLang, setAppLang] = useState('pl');

    const changeLang = (newLang) => {
        setAppLang(newLang);
    };

    return (
        <LangContext value={{ lang: appLang, changeLang }}>
            {children}
        </LangContext>
    );
}

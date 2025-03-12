import { useLang } from '../hooks/useLang';

const text = {
    uk: 'Вибрана мова',
    en: 'Selected language',
    pl: 'Wybrany język',
    es: 'Idioma seleccionado',
    de: 'Ausgewählte Sprache',
};

export default function LangMessage() {
    const langCtx = useLang();

    return (
        <p>
            <b>{text[langCtx.lang]}</b>: {langCtx.lang}
        </p>
    );
}

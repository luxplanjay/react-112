const text = {
  ua: "Вибрана мова",
  en: "Selected language",
  pl: "Wybrany język",
  es: "Idioma seleccionado",
  de: "Ausgewählte Sprache",
};

export default function LangMessage() {
  return (
    <p>
      <b>{text.ua}</b>: ua
    </p>
  );
}

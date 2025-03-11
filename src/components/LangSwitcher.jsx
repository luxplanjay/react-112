/**
 * Використовує контекст вибору мови,
 * не отримує пропсів.
 */

export default function LangSwitcher() {
  return (
    <select>
      <option value="uk">Українська</option>
      <option value="en">English</option>
      <option value="pl">Polski</option>
      <option value="es">Española</option>
      <option value="de">Deutsch</option>
    </select>
  );
}

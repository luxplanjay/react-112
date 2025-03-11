import LangSwitcher from "../LangSwitcher";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <LangSwitcher />
    </header>
  );
}

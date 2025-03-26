import { useSelector } from 'react-redux';
import Balance from './Balance';
import LangSwitcher from './LangSwitcher';

export default function App() {
  const appLang = useSelector((state) => state.locale.lang);

  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>
        State management with Redux
      </h1>

      <Balance />

      <hr />
      <LangSwitcher />
      <p>Current lang: {appLang}</p>
    </div>
  );
}

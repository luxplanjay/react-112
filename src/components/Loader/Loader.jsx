import css from './Loader.module.css';

export default function Loader({ children }) {
  return <p className={css.text}>{children}</p>;
}

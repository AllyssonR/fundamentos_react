import styles from "./Header.module.css";
import logoImg from "../assets/Ignite simbol.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="logo ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}

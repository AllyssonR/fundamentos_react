import styles from "./Sidebar.module.css";
import perfilImg from "../assets/glenn-carstens-peters-P1qyEf1g0HU-unsplash.jpg";
import { PencilSimpleLine } from "phosphor-react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={perfilImg} className={styles.cover} alt="perfil" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/Allyssonr.png" />
        <strong>Guilherme Navarro</strong>
        <span>Designer UX</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

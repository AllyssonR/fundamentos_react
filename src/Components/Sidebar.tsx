import styles from "./Sidebar.module.css";
import perfilImg from "../assets/glenn-carstens-peters-P1qyEf1g0HU-unsplash.jpg";
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={perfilImg} className={styles.cover} alt="perfil" />
      <div className={styles.profile}>
       <Avatar src="https://github.com/diego3g.png"/>
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

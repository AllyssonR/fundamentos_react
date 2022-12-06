import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de maio as 8:13" dateTime="2022-05-11 08:13:30">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon,parabens !! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={15} />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import styles from './Avatar.module.css';
interface avatarProps {
  src: string;
  hasBorder?: boolean;
}
export function Avatar({ src, hasBorder = true }: avatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.Avatar}
      src={src}
    />
  );
}

/*
export function Avatar({ src, hasBorder }: avatarProps) {
  return hasBorder ? (
    <img src={src} className={styles.avatarWithBorder} />     minha ideia na hora
  ) : (                                                       nesse caso achei bem mais eficiente deixar uma imagem somente e colocar o if ternario no className
    <img src={src} className={styles.avatar} />
  );
}

*/

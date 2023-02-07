import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';
interface avatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export function Avatar({ hasBorder = true, ...rest }: avatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.Avatar}
      {...rest}
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

import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { FormEvent, useState } from 'react';
import uuid from 'react-uuid';
interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: [{ type: string; contentText: string }];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState(['post muito bacana en']);
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateRelaviveToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  function handleNewCommentChange(event: FormEvent) {
    setNewCommentText(event.target.value);
  }
  function deleteComment(comment: string) {
    console.log(`Deletar comentario ${comment}`);
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelaviveToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={uuid()}>{line.contentText}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={uuid()}>
                <a href="#">{line.contentText}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe seu comentario"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={uuid()}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}

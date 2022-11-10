type PostProps = {
  title: string;
  content: string;
};

export function Post({ title, content }: PostProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

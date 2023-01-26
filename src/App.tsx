import { Header } from './Components/Header';
import { Post } from './Components/Post';
import styles from './App.module.css';
import { Sidebar } from './Components/Sidebar';
// author :{avatar_url:"",name:"",role:""}
// publishedAt:Date
//content:String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https:github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', contentText: 'Fala galeraa 👏' },
      {
        type: 'paragraph',
        contentText:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', contentText: 'jane.design/doctorCare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https:github.com/diego3g.png',
      name: 'Mayk Brito',
      role: 'Edutator @Rocketseat',
    },
    content: [
      { type: 'paragraph', contentText: 'Fala galeraa 👏' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', contentText: 'jane.design/doctorCare' },
    ],
    publishedAt: new Date('2022-05-07 20:00:00'),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
          <Post/>

        </main>
      </div>
    </div>
  );
}

import { Header } from "./Components/Header";
import { Post } from "./post";
import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            title="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, reiciendis est. Neque, dolorum corrupti officiis provident dicta ratione est, optio voluptatum illo tempora quos qui saepe voluptas delectus ullam repellat."
          />
          <Post
            title="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, reiciendis est. Neque, dolorum corrupti officiis provident dicta ratione est, optio voluptatum illo tempora quos qui saepe voluptas delectus ullam repellat."
          />
        </main>
      </div>
    </div>
  );
}

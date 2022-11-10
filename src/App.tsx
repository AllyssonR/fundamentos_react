import { Header } from "./Header";
import { Post } from "./post";
export function App() {
  return (
    <>
      <Header />
      <Post
        title="Lorem"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, reiciendis est. Neque, dolorum corrupti officiis provident dicta ratione est, optio voluptatum illo tempora quos qui saepe voluptas delectus ullam repellat."
      />
    </>
  );
}

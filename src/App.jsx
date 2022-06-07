import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
          author="João Amaral"
          content="lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus et ea rebum ad minim veniam et dolore magna aliqu fugiat nulla pariatur et ea rebum ad minim veniam et dolore magna al"
        />
         <Post 
          author="Arthur Silva"
          content="lorem ipsum sit fugiat nulla pariatur et ea rebum ad minim"
        />
        </main>
      </div>
    </div>
  );
}

export default App;

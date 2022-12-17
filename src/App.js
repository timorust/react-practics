import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";
// import ClassCounter from "./components/ClassCounter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScrypt 1", body: "Description" },
    { id: 2, title: "JavaScrypt 2", body: "Description" },
    { id: 3, title: "JavaScrypt 3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostsList posts={posts} title="JS Posts" />
    </div>
  );
}

export default App;

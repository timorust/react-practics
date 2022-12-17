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

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostsList remove={removePost} posts={posts} title="JS Posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post not founded!</h1>
      )}
    </div>
  );
}

export default App;

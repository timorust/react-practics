import React, { useRef, useState } from "react";
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

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Post name"
        />

        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Post content"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostsList posts={posts} title="JS Posts" />
    </div>
  );
}

export default App;

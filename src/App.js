import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "DD", body: "XX" },
    { id: 2, title: "FF", body: "WW" },
    { id: 3, title: "VV", body: "AA" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Sort"
          options={[
            { value: "title", name: "Selection by name" },
            { value: "body", name: "Selection by description" },
          ]}
        />
      </div>

      {posts.length ? (
        <PostsList remove={removePost} posts={posts} title="JS Posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post not founded!</h1>
      )}
    </div>
  );
}

export default App;

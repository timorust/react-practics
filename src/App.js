import React, { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "DD", body: "XX" },
    { id: 2, title: "FF", body: "WW" },
    { id: 3, title: "VV", body: "AA" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("SORTED FUNCTION WORK!");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const sortPost = (sort) => {
    setSelectedSort(sort);
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
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
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

      {sortedAndSearchedPosts.length ? (
        <PostsList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="JS Posts"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post not founded!</h1>
      )}
    </div>
  );
}

export default App;

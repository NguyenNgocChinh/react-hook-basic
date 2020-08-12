import React, { useEffect, useState } from 'react';
import './App.scss';
import PostList from './components/PostList';


function App() {

  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const reponse = await fetch(requestUrl);
      const reponseJSON = await reponse.json();
      const { data } = reponseJSON;
      setPostsList(data);
    }
    fetchPostList();
  }, []);

  return (
    <div className="app">
      <h1>React Hook - useEffect - Call API</h1>
      <PostList posts={postsList} />
    </div>
  );
}

export default App;

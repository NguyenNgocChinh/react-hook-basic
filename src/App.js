import React, { useEffect, useState } from 'react';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import querystring from 'query-string';

function App() {

  const [postsList, setPostsList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  });
  useEffect(() => {
    async function fetchPostList() {
      const paramString = querystring.stringify(filters);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
      const reponse = await fetch(requestUrl);
      const reponseJSON = await reponse.json();
      const { data, pagination } = reponseJSON;
      setPostsList(data);
      setPagination(pagination);
    }
    fetchPostList();
  }, [filters]);


  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  return (
    <div className="app">
      <h1>React Hook - useEffect - Call API</h1>
      <PostList posts={postsList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;

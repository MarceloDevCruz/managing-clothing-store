import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, PostContainer } from './styled';
import { CreateContext } from '../../context/CreateContext';
import Post from '../../components/post/Post';

import Pagination from '../../components/pagination/Pagination';
import Header from '../../components/header/Header';

const Home = () => {
  const context = useContext(CreateContext);

  const [offSet, setOffSet] = useState(0);
  const limit = 6;
  const total = context.posts.length;

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/posts');
      context.setPosts(response.data.data);
      console.log(context.posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`/posts/${postId}`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Container >
        {context.posts && (
          <PostContainer theme={context.theme}>
            {context.posts
              .filter((post, i) => i >= offSet && i < offSet + limit)
              .map((post) => (
                <Post post={post} key={post.id} onDeletePost={handleDeletePost} />
              ))}
          </PostContainer>
        )}
        <Pagination limit={limit} total={total} offSet={offSet} setOffSet={setOffSet} />
      </Container>
    </>
  );
};

export default Home;

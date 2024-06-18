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
  const total = context.items.length;

  const fetchItems = async () => {
    try {
      const response = await axios.get('/items');
      context.setItems(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Header />
      <Container >
        {context.items && (
          <PostContainer theme={context.theme}>
            {context.items
              .filter((item, i) => i >= offSet && i < offSet + limit)
              .map((item) => (
                <Post item={item} key={item.id} />
              ))}
          </PostContainer>
        )}
        <Pagination limit={limit} total={total} offSet={offSet} setOffSet={setOffSet} />
      </Container>
    </>
  );
};

export default Home;

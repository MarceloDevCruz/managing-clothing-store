import React, { useContext, useEffect, useState } from 'react';
import { Container, PostContainer, CommentsContainer, CommentForm } from './styled';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Comment from '../../components/comment/Comment';

const IndividualPost = () => {
  const context = useContext(CreateContext);
  const params = useParams();
  const id = Number(params.id);
  const [post, setPost] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        const fetchedPost = response.data.data;
        setPost(fetchedPost);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id], [context.posts.attributes]);

  const onSubmitComment = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`/posts/${id}/comments`, {
        user_id: context.user.id,
        user_name: context.user.name,
        content: data.content,
      });
      const createdComment = response.data.data;
      setPost((prevPost) => ({
        ...prevPost,
        attributes: {
          ...prevPost.attributes,
          comments: [...prevPost.attributes.comments, createdComment],
        },
      }));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/comment/${commentId}`);
      const updatedPost = { ...post };
      updatedPost.attributes.comments = updatedPost.attributes.comments.filter((comment) => comment.id !== commentId);
      setPost(updatedPost);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(post);

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <img src={post.attributes.image} alt={post.attributes.image_alt} />
      <PostContainer theme={context.theme}> 
        <h1>{post.attributes.title}</h1>
        <p>{post.attributes.content}</p>
        <CommentsContainer theme={context.theme}>
        <h2>Comentários</h2>
        <small>Total de comentários: {post.attributes.comments.length}</small>

        {post.attributes.comments.length > 0 ? (
          post.attributes.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} onDeleteComment={handleDeleteComment} />
          ))
        ) : (
          <p>Ainda não há comentários neste post.</p>
        )}


        <CommentForm onSubmit={handleSubmit(onSubmitComment)} theme={context.theme}>
          <textarea {...register('content', { required: true })} placeholder="Escreva seu comentário..." />
          <button type="submit">Comentar</button>
        </CommentForm>
      </CommentsContainer> 
      </PostContainer>
    </Container>
  );
};

export default IndividualPost;

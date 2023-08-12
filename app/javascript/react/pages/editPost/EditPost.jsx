import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';

const EditPost = () => {
  
  const params = useParams();
  const navigate = useNavigate();

  const id = Number(params.id);

  const { register, handleSubmit, reset } = useForm();
  const context = useContext(CreateContext);

  const onSubmitEdit = async (data) => {
    try {
      const response = await axios.put(`/posts/${id}`, data);
      console.log(response.data);
      reset();
      navigate('/');
    } catch (error) {
      console.error(error.response.data); // Erro ao editar o post
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        const { title, content } = response.data.data.attributes;
        reset({
          title,
          content,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id, reset]);

  return (
    <>
      <Container theme={context.theme}>
        <form onSubmit={handleSubmit(onSubmitEdit)}>
          <label htmlFor="title">Titulo:</label>
          <input type="text" {...register('title', { required: true })} />
          <input type="hidden" value={context.user.id} {...register('user_id', { required: true })} />
          <input type="hidden" value={context.user.name} {...register('user_name', { required: true })} />
          <label htmlFor="content">Conteúdo:</label>
          <textarea {...register('content', { required: true })} />
          <button type="submit">Editar post</button>
        </form>
      </Container>
    </>
  );
};

export default EditPost;

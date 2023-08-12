import React, { useContext, useState } from 'react';
import { Container } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';

const CreatePost = () => {
  const context = useContext(CreateContext);
  const { register, handleSubmit, reset } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('user_id', data.user_id);
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('/posts', formData);
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <Container theme={context.theme}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Título:</h5>
          <input type="text" placeholder="Titulo do seu post..." {...register('title', { required: true })} />
          <input type="hidden" value={context.user.id} {...register('user_id', { required: true })}></input>
          <input type="hidden" value={context.user.name} {...register('user_name', { required: true })}></input>
          <h5>Conteúdo:</h5>
          <textarea placeholder="Conteúdo do seu post" {...register('content', { required: true })} />
          <label htmlFor="imageUpload">Escolha uma imagem para seu post:</label>
          <input
            type="file"
            name="image"
            id="imageUpload"
            {...register('image')}
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <button type="button" onClick={() => document.getElementById('imageUpload').click()}>
            Selecionar Imagem
          </button>
          <span>{selectedImage ? selectedImage.name : 'Nenhum arquivo escolhido'}</span>
          <button type="submit">criar post</button>
        </form>
      </Container>
    </>
  );
};

export default CreatePost;

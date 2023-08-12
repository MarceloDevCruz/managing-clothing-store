import React, { useContext} from 'react';
import { Container } from './styled';
import { BsX } from 'react-icons/bs'
import { CreateContext } from '../../context/CreateContext';


const Comment = ({ comment, onDeleteComment }) => {


  console.log(comment)
  const context = useContext(CreateContext);
  const isUserOwner = context.user.id === comment.user_id;

  const handleDeleteComment = () => {
    onDeleteComment(comment.id);
  };

  return (
    <Container>
      <small>{comment.user_name} diz:</small>
      <p>{comment.content}</p>
      { isUserOwner && < BsX onClick={handleDeleteComment}/>}
    </Container>
  );
};

export default Comment;

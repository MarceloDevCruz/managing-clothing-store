import React, { useContext, useState, useRef, useEffect } from 'react';
import { Container, Vectors, InlineButton, PopupContainer, PopupWrapper } from './styled';
import { AiTwotoneEdit } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CreateContext } from '../../context/CreateContext';
import { FiMoreHorizontal } from 'react-icons/fi';

const Post = ({ post, onDeletePost }) => {
  const context = useContext(CreateContext);
  const isUserOwner = context.user.id === post.attributes.user_id;

  const handleDeletePost = () => {
    onDeletePost(post.id);
  };

  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();

  const handlePopupClick = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container theme={context.theme}>
      <img src={post.attributes.image} alt={post.attributes.image_alt} />
      <h3>{post.attributes.title}</h3>
      <p>{post.attributes.content}</p>
      <small>Postado por: {post.attributes.user_name}</small>
      <small>{post.attributes.created_at}</small>
      <InlineButton>
        <Link to={`/post/${post.id}`} >
          Veja mais &rarr;
        </Link>
      </InlineButton>
      <Vectors>
        {isUserOwner && (
          <PopupWrapper>
            <FiMoreHorizontal onClick={handlePopupClick} />
            {showPopup && (
              <PopupContainer ref={popupRef} theme={context.theme}>
                <Link to={`/editpost/${post.id}`}>
                  <AiTwotoneEdit />
                </Link>
                <IoMdTrash onClick={handleDeletePost} />
              </PopupContainer>
            )}
          </PopupWrapper>
        )}
      </Vectors>
    </Container>
  );
};

export default Post;

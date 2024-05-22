import React, { useContext, useState, useRef, useEffect } from 'react';
import { Container, Vectors, InlineButton, Image, PopupContainer, PopupWrapper } from './styled';
import { AiTwotoneEdit } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CreateContext } from '../../context/CreateContext';
import { FiMoreHorizontal } from 'react-icons/fi';

const Post = ({ item }) => {
  const context = useContext(CreateContext);
  const isUserOwner = context.user.id === item.attributes.user_id;

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
      <Image src={item.attributes.image} alt={item.attributes.image_alt} />
      <h3>{item.attributes.title}</h3>
      <p>{item.attributes.description}</p>
      <small>{item.attributes.created_at}</small>
      <InlineButton>
        <Link to={`/item/${item.id}`} >
          Veja mais &rarr;
        </Link>
      </InlineButton>
    </Container>
  );
};

export default Post;

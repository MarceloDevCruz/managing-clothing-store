import React, { useEffect } from 'react'

import { PopupContainer } from './styled';

const Popup = ({ message, type, onClose }) => {
    useEffect(() => {
        const autoCloseTimeout = 3500;
        const timer = setTimeout(() => {
            onClose();
        }, autoCloseTimeout);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <PopupContainer type={type} onClick={(e) => e.stopPropagation()}>
            <p>{message}</p>
        </PopupContainer>
    );
};

export default Popup;

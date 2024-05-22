import React, { useState } from 'react'

const AuthContext = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});
    const [items, setItems] = useState([]);
    const [theme, setTheme] = useState('light')

    return {
        isLogged, setIsLogged, user, setUser, items, setItems, theme, setTheme
    };
};

export default AuthContext;
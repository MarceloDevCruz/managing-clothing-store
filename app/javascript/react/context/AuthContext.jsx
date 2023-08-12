import React, { useState } from 'react'

const AuthContext = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [theme, setTheme] = useState('light')

    return {
        isLogged, setIsLogged, user, setUser, posts, setPosts, theme, setTheme
    };
};

export default AuthContext;
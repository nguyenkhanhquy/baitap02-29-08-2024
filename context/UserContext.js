import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: "", password: "" });

    const login = (username, password) => {
        setUser({ username, password });
    };

    const logout = () => {
        setUser({ username: "", password: "" });
    };

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

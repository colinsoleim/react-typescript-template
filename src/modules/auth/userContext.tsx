import React, { useState, createContext, useEffect } from 'react';
import { axios } from '../singletons/singletons';

const UserContext = createContext({
  user: undefined,
  setUser: undefined,
  login: undefined,
  logout: undefined,
});

const UserContextConsumer = UserContext.Consumer;

interface UserContextProviderProps {
  children: JSX.Element;
}

const UserContextProvider = (props: UserContextProviderProps): JSX.Element => {
  const { children } = props;
  const [user, setUser] = useState(undefined);

  const login = async (email: string, password: string) => {
    try {
      await axios.post(`sessions`, { email, password }).then((response) => {
        localStorage.setItem('token', response.data.jwt);
        setUser(response.data.user);
      });
    } catch {
      setUser({});
    }
  };

  const logout = async () => {
    try {
      localStorage.setItem('token', '');
      setUser({});
    } catch {
      setUser({});
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        // const result = await axios.get(`sessions`);
        // setUser(result.data.user || {});
        setUser({});
      } catch (error) {
        setUser({});
      }
    }

    if (user === undefined) {
      fetchUser();
    }
  }, [user]);

  return <UserContext.Provider value={{ user, setUser, login, logout }}>{children}</UserContext.Provider>;
};

export { UserContextProvider, UserContextConsumer, UserContext };

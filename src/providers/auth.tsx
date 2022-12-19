import React, { useState, createContext, ReactNode, FC } from 'react';

export const AuthenticatedUserContext = createContext({});

type Props = {
  children: ReactNode;
}

// setup this Auth provider
export const AuthenticatedUserProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
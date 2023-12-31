// Auth Context

import { createContext, useState } from "react";
//? 1-Creating Context
export const AuthContext = createContext();

//? 2-provider component

const AuthContextProvider = props => {
  const [user, setUser] = useState(false);
  //   console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

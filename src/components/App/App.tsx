import React, { FC, useCallback, useState } from 'react';
import './App.css';
import { Page } from '../Page/Page';

const App: FC = () => {
  const [user, setUser] = useState<Record<any, any> | undefined>(undefined);

  const onLoginHandler = useCallback(() => {
    console.log('login');
    setUser({});
  }, []);

  const onLogoutHandler = useCallback(() => {
    console.log('logout');
    setUser(undefined);
  }, []);

  const onRegisterHandler = useCallback(() => {
    console.log('register');
  }, []);

  return (
    <div className="App">
      <Page
        user={user}
        onLogin={onLoginHandler}
        onLogout={onLogoutHandler}
        onCreateAccount={onRegisterHandler}
      />
    </div>
  );
};

export default App;

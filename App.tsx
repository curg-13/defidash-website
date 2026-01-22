import React from 'react';
import RootLayout from './app/layout';
import Home from './app/page';

const App: React.FC = () => {
  return (
    <RootLayout>
      <Home />
    </RootLayout>
  );
};

export default App;
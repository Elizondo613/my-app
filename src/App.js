import React from 'react';
import TodoApp from './components/TodoApp';
import Auth from './components/Auth';

function App() {
  return (
    <Auth>
      <TodoApp/>
    </Auth>
  );
}

export default App;

import React from 'react';

import './App.css';
import { Provider } from "./store";
import TodoList from "./todo-list";

function App() {
  return (
    <Provider>
      <TodoList/>
    </Provider>
  );
}

export default App;

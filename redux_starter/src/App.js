import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        
      </header>
      <PostsForm />
      <hr />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <PostsForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;

import {useEffect,useState} from 'react';

import './App.css';

function App() {
const [posts,setPosts] =useState([])

useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts))

},[])

  return (
    <div className="App">
    <h1>Fetch API Data</h1>
    
    {posts.map((post)=>
    <div key={post.id}>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </div>
    )}
    </div>
  );
}

export default App;

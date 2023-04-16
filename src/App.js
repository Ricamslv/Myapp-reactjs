import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function MyButton({count,onClick}) {
  return(
    
    <button onClick={onClick}>
    Clicked {count} times
  </button>
  );
}


const user = {
  name: 'Rica Mae Soliva',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize:90
};

const products = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garbage', isFruit: false, id: 2 },
  {title: 'Apple', isFruit: true, id: 3 },
];

function App() {
  
  const listItems= products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta':'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <ul>{listItems}</ul>
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>

    
    <h1>{user.name}</h1>
    <img 
    className='avatar'
    src={user.imageUrl}
    alt={'Photo of' + user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }} 
    />

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Welcome to my app</h1>
        <p>Hello there.<br/> How do you do?</p>
      
        <MyButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>

      <body>
  


      </body>
    </div>
    </>
  );
}

export default App;

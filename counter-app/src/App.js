import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);

  const handleChange = (value) => {
    console.log(value)
    setTotal(value);
  }

  return (
    <div>
      <NavBar total={total} />
      <Counters onChange={handleChange} />
    </div>
  );
}

export default App;

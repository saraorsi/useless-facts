import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './components/Header';

const App = () => {

  const [facts, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://uselessfacts.jsph.pl//random.json?language=en`);
      const response = await data.json();
      console.log(response);
      setData(response);
    }
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="facts">{facts.text}</div>
      <div className="source">– {facts.source}</div>
    </>
  );
}

export default App;

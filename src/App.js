import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Inputs from './components/Inputs';
import { getSearchAPI } from './services/network';


function App() {
  const [cards, setCards] = useState([]);
  const onChange = (value) => {
      getSearchAPI({ searchStr: value }).then((items) => {
        setCards(items);
      });
  }

  return (
    <div className="App">
      <h1>Search giphy</h1>
      <Inputs onChange={onChange} />
      {/* Loader */}
      <Cards cards={cards} />
    </div>
  );
}

export default App;

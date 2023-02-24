import React from 'react';
import StateSearch from '../context/StateSearch';
import '../styles/App.css';
import Carousel from './block_carrousel';
import BlockDescription from './block_description';
import NavNotflix from './nav';

function App() {
  return (
    <StateSearch>
      <div>
        <header>
          <NavNotflix />
        </header>
        <main>
          <BlockDescription />
          <Carousel />
        </main>
      </div>
    </StateSearch>
  );
}

export default App;

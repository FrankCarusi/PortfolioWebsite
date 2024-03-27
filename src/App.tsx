import React from 'react';
import './App.css';
import CarouselComponent from './components/CarouselComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="card">
        <CarouselComponent />
      </div>
    </div>
  );
}

export default App;

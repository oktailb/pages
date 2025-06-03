import React from 'react';
import Grid from './Grid';
import './App.css';

const App = () => {
  const gridData = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => null)
  );

  return (
    <div className="App">
      <Grid rows={10} cols={10} gridData={gridData} />
    </div>
  );
};

export default App;

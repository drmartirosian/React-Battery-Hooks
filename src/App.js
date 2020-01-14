import React from 'react';
import BatteryContainer from './components/BatteryContainer/BatteryContainer';
import BatteryHookContainer from './components/BatteryHookContainer/BatteryHookContainer';



function App() {
  return (
    <>
      <div>
        <h3>Class Battery</h3>
        <BatteryContainer />
      </div>
      <h1>VS.</h1>
      <div>
        <h3>Function(Hook) Battery</h3>
        <BatteryHookContainer />
      </div>
    </>
  );
}

export default App;

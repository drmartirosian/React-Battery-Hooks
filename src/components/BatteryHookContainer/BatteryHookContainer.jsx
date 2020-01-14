// Update the import to include the useState hook
import React, {useState, useEffect} from "react";
// Import the Battery component used for visualization
import Battery from "../Battery/Battery";
// Add additional state by calling useState multiple times
import {register, unregister} from '../../utils/battery';

function BatteryHookContainer() {
  const [batteryData, setBatteryData] = useState({
    level: 0,
    charging: false,
  });

  function updateBattery(data) {
    setBatteryData(data);
  }

  useEffect(() => {
    register(updateBattery);
      return () => {
    unregister(updateBattery);
    };
  }, []);

  return (
    <Battery level={batteryData.level} charging={batteryData.charging}/>
  );
}

export default BatteryHookContainer;
